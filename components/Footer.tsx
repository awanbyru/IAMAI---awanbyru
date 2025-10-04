
import React from 'react';
import { ModalType } from '../types';

interface FooterProps {
    onOpenModal: (type: ModalType) => void;
}

const Footer: React.FC<FooterProps> = ({ onOpenModal }) => {
  return (
    <footer className="bg-brand-secondary mt-12">
      <div className="container mx-auto px-4 py-6 text-center text-brand-light">
        <p>&copy; {new Date().getFullYear()} IAMAI - awanbyru. All Rights Reserved.</p>
        <div className="mt-2 space-x-4">
          <button onClick={() => onOpenModal(ModalType.PRIVACY)} className="hover:text-brand-cyan transition-colors">Kebijakan Privasi</button>
          <span>|</span>
          <button onClick={() => onOpenModal(ModalType.CONTACT)} className="hover:text-brand-cyan transition-colors">Kontak</button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
