import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Accueil from './pages/Home';
import Profil from './pages/Profil';

interface AppProps {
  users: { id: number; name: string; email: string }[];
  prenom: string;
  nom: string;
  age: number;
  adresse: string;
}

const App: React.FC<AppProps> = (props) => {
  const { users, prenom, nom, age, adresse } = props;

  return (
    <BrowserRouter>
      <Routes>
        <Route
          index 
          element={<Accueil users={users} prenom={prenom} nom={nom} age={age} adresse={adresse} />}
        />
        <Route
          path="/profil"
          element={<Profil users={users} prenom={prenom} nom={nom} age={age} adresse={adresse} />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
