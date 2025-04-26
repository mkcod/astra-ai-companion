import React from 'react';
import MessageDisplay from './MessageDisplay';
import MicButton from './MicButton';
import { useChatContext } from '../context/ChatContext';

const ChatInterface: React.FC = () => {
  const { status } = useChatContext();
  
  return (
    <div className="w-full max-w-3xl glass-panel flex flex-col p-4 md:p-6 h-[80vh] relative">
      <div className="absolute -top-2 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-angel-500 to-angel-600 text-xs">
        {status}
      </div>
      
      <div className="flex flex-col items-center justify-center flex-1">
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
        <p className="text-celestial-100/70 text-sm mt-2 max-w-sm text-center">
          Press the microphone button and start speaking. Astra is waiting to assist you.
        </p>
      </div>
      
      <div className="flex justify-center items-center py-4">
        <MicButton />
      </div>
    </div>
  );
};

export default ChatInterface;