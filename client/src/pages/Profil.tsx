import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

interface UserProfile {
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

const Profile: React.FC<UserProfile> = ({ prenom, nom, age, adresse, email, bio, avatarUrl, phone, job }) => {

  return (
    <div className='min-h-screen flex flex-col justify-between'>
      <Header prenom={prenom} nom={nom} age={age} adresse={adresse} />
      <div className="max-w-3xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-2xl">
        {/* Avatar + Infos principales */}
        <div className="flex items-center space-x-6">
          <img src={avatarUrl} alt="Avatar" className="w-24 h-24 rounded-full border-4 border-blue-500 shadow-md" />
          <div>
            <h1 className="text-3xl font-bold text-gray-800">{prenom} {nom}</h1>
            <p className="text-gray-500">{email}</p>
          </div>
        </div>

        {/* Informations supplémentaires */}
        <div className="mt-6">
          <h2 className="text-xl font-semibold text-gray-700">À propos de moi</h2>
          <p className="text-gray-600 mt-2">{bio}</p>
        </div>

        <div className="mt-4">
          <h2 className="text-xl font-semibold text-gray-700">Détails personnels</h2>
          <p className="text-gray-600"><strong>Âge :</strong> {age} ans</p>
          <p className="text-gray-600"><strong>Adresse :</strong> {adresse}</p>
          <p className="text-gray-600"><strong>Téléphone :</strong> {phone}</p>
          <p className="text-gray-600"><strong>Profession :</strong> {job}</p>
        </div>

        {/* Bouton Modifier le Profil */}
        <div className="mt-6 flex justify-center">
          <button className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition">
            Modifier le profil
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Profile;

