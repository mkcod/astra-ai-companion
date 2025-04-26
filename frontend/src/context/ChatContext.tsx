import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';
import { Message } from '../types';
import { useWebSocket } from '../hooks/useWebSocket';

interface ChatContextType {
  messages: Message[];
  isListening: boolean;
  isProcessing: boolean;
  isTyping: boolean;
  status: string;
  startListening: () => void;
  stopListening: () => void;
}

const ChatContext = createContext<ChatContextType | undefined>(undefined);

export const useChatContext = () => {
  const context = useContext(ChatContext);
  if (!context) {
    throw new Error('useChatContext must be used within a ChatProvider');
  }
  return context;
};

export const ChatProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isListening, setIsListening] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [status, setStatus] = useState('Ready');
  
  // In a real implementation, this would connect to your FastAPI WebSocket
  // For now, we'll simulate the WebSocket behavior
  const { 
    sendMessage, 
    lastMessage, 
    connectionStatus 
  } = useWebSocket('ws://localhost:8000/ws'); // This would be your actual WebSocket URL
  
  // Handle incoming WebSocket messages
  useEffect(() => {
    if (lastMessage) {
      try {
        const data = JSON.parse(lastMessage);
        
        if (data.type === 'transcript') {
          // Handle user's transcribed speech
          addMessage({
            id: `user-${Date.now()}`,
            type: 'user',
            text: data.text
          });
          setIsProcessing(true);
          setStatus('Processing...');
        }
        else if (data.type === 'message') {
          // Handle AI response
          setIsTyping(true);
          // Simulate typing effect
          setTimeout(() => {
            addMessage({
              id: `assistant-${Date.now()}`,
              type: 'assistant',
              text: data.text
            });
            setIsTyping(false);
            setIsProcessing(false);
            setStatus('Ready');
          }, 1000);
        }
        else if (data.type === 'status') {
          setStatus(data.text);
        }
      } catch (error) {
        console.error('Failed to parse WebSocket message:', error);
      }
    }
  }, [lastMessage]);
  
  // Update status based on connection
  useEffect(() => {
    if (connectionStatus === 'Connected') {
      setStatus('Connected');
    } else if (connectionStatus === 'Connecting') {
      setStatus('Connecting...');
    } else if (connectionStatus === 'Closed') {
      setStatus('Disconnected');
    }
  }, [connectionStatus]);
  
  const addMessage = useCallback((message: Message) => {
    setMessages(prev => [...prev, message]);
  }, []);
  
  const startListening = useCallback(() => {
    setIsListening(true);
    setStatus('Listening...');
    sendMessage(JSON.stringify({ action: 'start_listening' }));
    
    // For demo: Simulate receiving a transcript after 3 seconds
    if (process.env.NODE_ENV === 'development') {
      setTimeout(() => {
        // This simulates the backend sending back the transcript
        simulateMessage({
          type: 'transcript',
          text: 'Hello Astra, how are you today?'
        });
      }, 3000);
    }
  }, [sendMessage]);
  
  const stopListening = useCallback(() => {
    setIsListening(false);
    sendMessage(JSON.stringify({ action: 'stop_listening' }));
    
    // For demo: Simulate receiving an AI response
    if (process.env.NODE_ENV === 'development') {
      setTimeout(() => {
        simulateMessage({
          type: 'message',
          text: 'Greetings, dear soul. I am Astra, your celestial companion on this journey of insight. I sense your presence and am here to offer guidance, understanding, and a touch of ethereal wisdom. How may I illuminate your path today?'
        });
      }, 2000);
    }
  }, [sendMessage]);
  
  // For demonstration purposes only - simulates receiving a message from the WebSocket
  const simulateMessage = (data: any) => {
    const event = new MessageEvent('message', {
      data: JSON.stringify(data)
    });
    
    // @ts-ignore - This is a workaround for simulation
    document.dispatchEvent(new CustomEvent('websocketMessage', { detail: event }));
  };
  
  return (
    <ChatContext.Provider
      value={{
        messages,
        isListening,
        isProcessing,
        isTyping,
        status,
        startListening,
        stopListening
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};