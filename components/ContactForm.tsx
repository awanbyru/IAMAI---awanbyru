
import React from 'react';

const ContactForm: React.FC = () => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <div className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-brand-light mb-1">Nama</label>
          <input type="text" id="name" name="name" className="w-full bg-brand-accent p-2 rounded-md border border-brand-light/20 focus:ring-2 focus:ring-brand-cyan focus:outline-none" />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-brand-light mb-1">Email</label>
          <input type="email" id="email" name="email" className="w-full bg-brand-accent p-2 rounded-md border border-brand-light/20 focus:ring-2 focus:ring-brand-cyan focus:outline-none" />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-brand-light mb-1">Pesan</label>
          <textarea id="message" name="message" rows={4} className="w-full bg-brand-accent p-2 rounded-md border border-brand-light/20 focus:ring-2 focus:ring-brand-cyan focus:outline-none"></textarea>
        </div>
        <div className="text-right">
          <button type="submit" className="bg-brand-cyan text-brand-primary font-bold py-2 px-6 rounded-full hover:bg-opacity-80 transition-colors duration-300">
            Kirim Pesan
          </button>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
