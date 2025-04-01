import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

interface ProfilProps {
    prenom: string;
    nom: string;
    age: number;
    adresse: string;
}

const About: React.FC<ProfilProps> = ({ prenom, nom, age, adresse }) => {
  return (
    <div className='min-h-screen flex flex-col justify-between'>
        <Header prenom={prenom} nom={nom} age={age} adresse={adresse} />
        <div className="flex flex-col items-center justify-center p-6">
            <div className="max-w-3xl bg-white shadow-lg rounded-2xl p-8">
                <h1 className="text-3xl font-bold text-gray-800 mb-4">À propos de nous</h1>
                <p className="text-gray-600 text-lg mb-4">
                Bienvenue sur notre application ! Notre mission est de vous offrir une expérience fluide et agréable grâce à une interface intuitive et des fonctionnalités innovantes.
                </p>
                <p className="text-gray-600 text-lg mb-4">
                Nous sommes une équipe passionnée de développeurs et de designers qui travaillent ensemble pour créer des solutions modernes et efficaces.
                </p>
                <p className="text-gray-600 text-lg">
                Merci de faire partie de notre aventure. Si vous avez des questions ou des suggestions, n'hésitez pas à nous contacter !
                </p>
            </div>
        </div>
        <Footer />
    </div>
  );
};

export default About;
