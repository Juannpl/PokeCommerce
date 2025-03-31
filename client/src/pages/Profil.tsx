import React from 'react';
import Header from '../components/Header';

interface ProfilProps {
  users: { id: number; name: string; email: string }[];
  prenom: string;
  nom: string;
  age: number;
  adresse: string;
}

const Profil: React.FC<ProfilProps> = ({ users, prenom, nom, age, adresse }) => {
  return (
    <div>
      <Header prenom={prenom} nom={nom} age={age} adresse={adresse} />
      <h2>Liste des utilisateurs</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name} - {user.email}</li>
        ))}
      </ul>
    </div>
  );
};

export default Profil;
