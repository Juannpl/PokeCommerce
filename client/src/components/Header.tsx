import React from 'react';
import { Link } from 'react-router-dom';

interface HeaderProps {
  prenom: string;
  nom: string;
  age: number;
  adresse: string;
}

const Header: React.FC<HeaderProps> = ({ prenom, nom, age, adresse }) => {
  return (
    <header className="flex items-center justify-between p-6 bg-white shadow-lg rounded-2xl">
      {/* Logo + Infos utilisateur */}
      <div className="flex items-center gap-4">
        <img src="/TCG_ICON.png" alt="Logo" className="w-16 h-16 rounded-full object-cover" />

        <div>
          <h1 className="text-2xl font-bold text-gray-800">
            Bonjour {prenom} {nom} !
          </h1>
          <p className="text-gray-600 text-sm">
            Vous avez <span className="font-semibold">{age}</span> ans et vous habitez à <span className="font-semibold">{adresse}</span>.
          </p>
        </div>
      </div>
      <div>
        {/* Bouton vers Profil */}
        <Link 
          to="/profil" 
          className="px-4 text-black font-semibold hover:text-blue-500 transition"
        >
          Profil
        </Link>
        {/* Bouton vers Home */}
        <Link 
          to="/" 
          className="px-4 text-black font-semibold hover:text-blue-500 transition"
        >
          Acceuil
        </Link>
        {/* Bouton vers ABout */}
        <Link 
          to="/about" 
          className="px-4 text-black font-semibold hover:text-blue-500 transition"
        >
          À propos
        </Link>
      </div>
    </header>
  );
};

export default Header;
