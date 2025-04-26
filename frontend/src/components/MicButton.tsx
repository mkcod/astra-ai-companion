import React, { useState, useEffect, useRef } from 'react';
import { Mic, MicOff } from 'lucide-react';
import { useChatContext } from '../context/ChatContext';

const MicButton: React.FC = () => {
  const { isListening, startListening, stopListening, isProcessing } = useChatContext();
  const [isPulsing, setIsPulsing] = useState(false);
  const audioVisualizerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Update animation state based on listening status
    setIsPulsing(isListening);
    
    // Update wave animation based on simulated audio levels when listening
    if (isListening && audioVisualizerRef.current) {
      const interval = setInterval(() => {
        const bars = audioVisualizerRef.current?.querySelectorAll('.wave-bar');
        if (bars) {
          bars.forEach(bar => {
            const height = Math.random() * 70 + 30;
            (bar as HTMLElement).style.height = `${height}%`;
          });
        }
      }, 100);
      
      return () => clearInterval(interval);
    }
  }, [isListening]);
  
  const handleMicToggle = () => {
    if (isListening) {
      stopListening();
    } else {
      startListening();
    }
  };
  
  return (
    <div className="flex flex-col items-center">
      <div className="relative mb-4">
        <button
          onClick={handleMicToggle}
          disabled={isProcessing}
          className={`
            relative w-20 h-20 rounded-full flex items-center justify-center z-10
            ${isListening 
              ? 'bg-angel-500 text-white shadow-glow-lg' 
              : 'bg-celestial-800 text-celestial-100 hover:bg-celestial-700 transition-colors'
            }
            ${isProcessing ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
            focus:outline-none focus:ring-2 focus:ring-celestial-400 focus:ring-opacity-50
          `}
        >
          {isListening ? (
            <Mic className="w-8 h-8" />
          ) : (
            <MicOff className="w-8 h-8" />
          )}
          {isPulsing && <div className="halo"></div>}
        </button>
      </div>
      
      {isListening && (
        <div ref={audioVisualizerRef} className="audio-wave mt-2">
          <div className="wave-bar"></div>
          <div className="wave-bar"></div>
          <div className="wave-bar"></div>
          <div className="wave-bar"></div>
          <div className="wave-bar"></div>
        </div>
      )}
      
      <div className="text-xs text-celestial-100/70 mt-2">
        {isListening ? "I'm listening..." : "Click to speak"}
      </div>
    </div>
  );
};

export default MicButton;