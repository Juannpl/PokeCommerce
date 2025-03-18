import React from 'react';

interface HeaderProps {
  prenom: string;
  nom: string;
  age: number;
  adresse: string;
}

const Header: React.FC<HeaderProps> = (props) => {
  return (
    <header>
      <h1>Bonjour {props.prenom} {props.nom} !</h1>
      <p>Vous avez {props.age} ans et vous habitez à {props.adresse}.</p>
    </header>
  );
};

export default Header;
