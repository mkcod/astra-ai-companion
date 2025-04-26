import { useState, useEffect, useCallback, useRef } from 'react';

type ConnectionStatus = 'Connecting' | 'Connected' | 'Closed';

export const useWebSocket = (url: string) => {
  const [lastMessage, setLastMessage] = useState<string | null>(null);
  const [connectionStatus, setConnectionStatus] = useState<ConnectionStatus>('Connecting');
  const ws = useRef<WebSocket | null>(null);
  const reconnectTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  
  // Function to create a new WebSocket connection
  const connect = useCallback(() => {
    try {
      // In development mode, simulate WebSocket with event listeners
      if (process.env.NODE_ENV === 'development') {
        console.log('Development mode: Using simulated WebSocket');
        
        // Create a custom event listener for simulated messages
        const handleSimulatedMessage = (e: Event) => {
          const customEvent = e as CustomEvent;
          setLastMessage(customEvent.detail.data);
        };
        
        document.addEventListener('websocketMessage', handleSimulatedMessage);
        
        setConnectionStatus('Connected');
        
        // Return cleanup
        return () => {
          document.removeEventListener('websocketMessage', handleSimulatedMessage);
        };
      } 
      // In production, use actual WebSocket
      else {
        ws.current = new WebSocket(url);
        
        ws.current.onopen = () => {
          console.log('WebSocket Connected');
          setConnectionStatus('Connected');
        };
        
        ws.current.onmessage = (event) => {
          setLastMessage(event.data);
        };
        
        ws.current.onclose = () => {
          console.log('WebSocket Disconnected');
          setConnectionStatus('Closed');
          
          // Attempt to reconnect after 3 seconds
          reconnectTimeoutRef.current = setTimeout(() => {
            console.log('Attempting to reconnect...');
            setConnectionStatus('Connecting');
            connect();
          }, 3000);
        };
        
        ws.current.onerror = (error) => {
          console.error('WebSocket Error:', error);
        };
        
        // Return cleanup function
        return () => {
          if (ws.current) {
            ws.current.close();
          }
          
          if (reconnectTimeoutRef.current) {
            clearTimeout(reconnectTimeoutRef.current);
          }
        };
      }
    } catch (error) {
      console.error('Failed to connect to WebSocket:', error);
      setConnectionStatus('Closed');
      
      // Attempt to reconnect after 3 seconds
      reconnectTimeoutRef.current = setTimeout(() => {
        console.log('Attempting to reconnect...');
        setConnectionStatus('Connecting');
        connect();
      }, 3000);
      
      return () => {
        if (reconnectTimeoutRef.current) {
          clearTimeout(reconnectTimeoutRef.current);
        }
      };
    }
  }, [url]);
  
  // Connect to WebSocket on component mount
  useEffect(() => {
    const cleanup = connect();
    
    return () => {
      if (cleanup) cleanup();
    };
  }, [connect]);
  
  // Function to send message through the WebSocket
  const sendMessage = useCallback((message: string) => {
    if (process.env.NODE_ENV === 'development') {
      console.log('Development mode: Would send message:', message);
      return;
    }
    
    if (ws.current && ws.current.readyState === WebSocket.OPEN) {
      ws.current.send(message);
    } else {
      console.error('WebSocket is not connected');
    }
  }, []);
  
  return { sendMessage, lastMessage, connectionStatus };
};