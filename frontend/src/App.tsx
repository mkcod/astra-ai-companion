import React from 'react';
import Header from './components/Header';
import ChatInterface from './components/ChatInterface';
import ParticlesBackground from './components/ParticlesBackground';
import { ChatProvider } from './context/ChatContext';

function App() {
  return (
    <ChatProvider>
      <div className="min-h-screen flex flex-col">
        <ParticlesBackground />
        <Header />
        <main className="flex-1 flex flex-col items-center justify-center p-4 relative z-10">
          <ChatInterface />
        </main>
        <footer className="py-3 text-center text-sm text-celestial-100/50 relative z-10">
          Astra The Angel: AI Companion © {new Date().getFullYear()}
        </footer>
      </div>
    </ChatProvider>
  );
}

export default App;