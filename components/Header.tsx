import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="bg-brand-secondary/50 backdrop-blur-sm sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-3">
            <svg className="w-10 h-10 text-brand-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M15 21v-1a6 6 0 00-5.176-5.97M15 21v-1a6 6 0 01-9-5.197M15 21H3v-1a6 6 0 0112 0v1z"></path>
                <path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <h1 className="text-2xl font-bold text-white tracking-wider">
                IAM<span className="text-brand-cyan">AI</span>
            </h1>
            <span className="text-brand-light hidden md:block">- awanbyru</span>
        </Link>
        <nav>
          <Link href="/" className="text-brand-light hover:text-brand-cyan transition-colors duration-300">Home</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;