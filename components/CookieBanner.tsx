
import React from 'react';

interface CookieBannerProps {
  onAccept: () => void;
}

const CookieBanner: React.FC<CookieBannerProps> = ({ onAccept }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-brand-secondary/90 backdrop-blur-sm p-4 z-50 shadow-2xl">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-brand-light text-sm text-center md:text-left">
          Situs web ini menggunakan cookie untuk memastikan Anda mendapatkan pengalaman terbaik. Dengan melanjutkan, Anda menyetujui <a href="#" className="text-brand-cyan hover:underline">Kebijakan Cookie</a> kami.
        </p>
        <button 
          onClick={onAccept}
          className="bg-brand-cyan text-brand-primary font-bold py-2 px-6 rounded-full hover:bg-opacity-80 transition-colors duration-300 flex-shrink-0"
        >
          Mengerti
        </button>
      </div>
    </div>
  );
};

export default CookieBanner;
