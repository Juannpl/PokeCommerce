import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-10">
      <div className="container mx-auto flex flex-col items-center justify-center text-center space-y-2">
        <p className="text-lg font-semibold">© {new Date().getFullYear()} PokeCommerce. Tous droits réservés.</p>
        <nav className="flex space-x-4">
          <a href="/about" className="hover:underline">À propos</a>
          <a href="/contact" className="hover:underline">Contact</a>
          <a href="/legal" className="hover:underline">Mentions légales</a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
