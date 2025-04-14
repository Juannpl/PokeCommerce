import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // Icônes du menu burger

interface HeaderProps {
  prenom: string;
  nom: string;
  age: number;
  adresse: string;
}

const Header: React.FC<HeaderProps> = ({ prenom, nom, age, adresse }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="flex items-center justify-between p-6 bg-white">
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

      {/* Menu Desktop */}
      <nav className="hidden md:flex gap-6">
        <Link to="/" className="text-black font-semibold hover:text-blue-500 transition">Accueil</Link>
        <Link to="/profil" className="text-black font-semibold hover:text-blue-500 transition">Profil</Link>
        <Link to="/about" className="text-black font-semibold hover:text-blue-500 transition">À propos</Link>
      </nav>

      {/* Bouton Menu Burger (Mobile) */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="md:hidden p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition"
      >
        {menuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Menu Mobile */}
      {menuOpen && (
        <div className="absolute top-20 right-6 bg-white shadow-xl rounded-lg p-4 flex flex-col items-start gap-4 md:hidden">
          <Link to="/" className="text-black font-semibold hover:text-blue-500 transition" onClick={() => setMenuOpen(false)}>Accueil</Link>
          <Link to="/profil" className="text-black font-semibold hover:text-blue-500 transition" onClick={() => setMenuOpen(false)}>Profil</Link>
          <Link to="/about" className="text-black font-semibold hover:text-blue-500 transition" onClick={() => setMenuOpen(false)}>À propos</Link>
        </div>
      )}
    </header>
  );
};

export default Header;
