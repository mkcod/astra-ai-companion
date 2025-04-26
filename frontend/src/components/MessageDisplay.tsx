import React, { useEffect, useRef } from 'react';
import { useChatContext } from '../context/ChatContext';
import { Message } from '../types';

const MessageDisplay: React.FC = () => {
  const { messages, isTyping } = useChatContext();
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  // Auto-scroll to bottom on new messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);
  
  // If no messages, show welcome message
  if (messages.length === 0 && !isTyping) {
    return (
      <div className="flex flex-col items-center justify-center h-full p-8 text-center">
        <div className="mb-4 text-angel-300">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="48" 
            height="48" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="1" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"></path>
            <path d="m8.5 8.5 1 1"></path>
            <path d="m14.5 8.5-1 1"></path>
            <path d="M7 2h10"></path>
            <path d="M5 8V5a2 2 0 0 1 2-2"></path>
            <path d="M17 8V5a2 2 0 0 0-2-2"></path>
            <path d="M16 22H8a4 4 0 0 1-4-4v-8a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4Z"></path>
          </svg>
        </div>
        <h3 className="text-xl font-serif">Begin Your Celestial Conversation</h3>
        <p className="text-celestial-100/70 text-sm mt-2 max-w-sm">
          Press the microphone button and start speaking. Astra is waiting to assist you.
        </p>
      </div>
    );
  }
  
  const renderMessage = (message: Message) => {
    if (message.type === 'user') {
      return (
        <div key={message.id} className="flex justify-end mb-4">
          <div className="user-message max-w-md">
            <p>{message.text}</p>
          </div>
        </div>
      );
    } else {
      return (
        <div key={message.id} className="flex justify-start mb-4">
          <div className="angel-message max-w-md">
            <p>{message.text}</p>
          </div>
        </div>
      );
    }
  };
  
  return (
    <div className="w-full overflow-y-auto px-4" style={{ maxHeight: '60vh' }}>
      {messages.map(renderMessage)}
      
      {isTyping && (
        <div className="flex justify-start mb-4">
          <div className="angel-message inline-flex items-center">
            <span className="typing-dot"></span>
            <span className="typing-dot"></span>
            <span className="typing-dot"></span>
          </div>
        </div>
      )}
      
      <div ref={messagesEndRef} />
    </div>
  );
};

export default MessageDisplay;