import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="w-full px-4 py-6 flex flex-col items-center justify-center text-center relative z-10">
      <div className="flex items-center mb-2">
        <span className="text-2xl mr-2">👼</span>
        <h1 className="text-3xl md:text-4xl font-serif font-light tracking-wide bg-gradient-to-r from-angel-300 to-celestial-300 bg-clip-text text-transparent">
          Astra The Angel
        </h1>
        <span className="text-2xl ml-2">👼</span>
      </div>
      <p className="text-sm md:text-base text-celestial-100/70 max-w-md">
        Your AI Companion for deeper understanding and soulful insight
      </p>
    </header>
  );
}

export default Header;