import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Accueil from './pages/Home';
import Profil from './pages/Profil';
import About from './pages/About';

interface AppProps {
  prenom: string;
  nom: string;
  age: number;
  adresse: string;
  email: string;
  bio: string;
  avatarUrl?: string;
  phone: string;
  job: string;
}

const App: React.FC<AppProps> = (props) => {
  const { prenom, nom, age, adresse, email, bio, avatarUrl, phone, job} = props;

  return (
    <BrowserRouter>
      <Routes>
        <Route
          index 
          element={<Accueil prenom={prenom} nom={nom} age={age} adresse={adresse} />}
        />
        <Route
          path="/profil"
          element={<Profil prenom={prenom} nom={nom} age={age} adresse={adresse} email={email} bio={bio} avatarUrl={avatarUrl} phone={phone} job={job} />}
        />
        <Route
          path="/about"
          element={<About prenom={prenom} nom={nom} age={age} adresse={adresse} />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
