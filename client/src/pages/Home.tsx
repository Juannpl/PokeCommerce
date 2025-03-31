import { faker } from "@faker-js/faker";
import Header from '../components/Header';

interface ProfilProps {
  users: { id: number; name: string; email: string }[];
  prenom: string;
  nom: string;
  age: number;
  adresse: string;
}

const produits = [...Array(10)].map(() => ({
  id: faker.string.uuid(),
  nom: faker.commerce.productName(),
  prix: faker.commerce.price(),
}));

const promotions = [...Array(5)].map(() => ({
  id: faker.string.uuid(),
  nom: faker.commerce.productName(),
  description: faker.lorem.paragraph(),
}));

const Home: React.FC<ProfilProps> = ({ prenom, nom, age, adresse }) => {
  return (
    <div>
      <Header prenom={prenom} nom={nom} age={age} adresse={adresse} />
      <div className="container mx-auto px-4 py-8">
        {/* Section Produits Récents */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-lime-800">Produits récents</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
            {produits.map((produit) => (
              <li
                key={produit.id}
                className="bg-white< shadow-lg rounded-lg p-4 hover:shadow-xl transition duration-300"
              >
                <img src="https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/primary/ProductShowcasesampleimages/JPEG/Product+Showcase-1.jpg" alt="Image du produit" />
                <p className="text-lg font-semibold p-2">{produit.nom}</p>
                <p className="text-gray-500 p-2">{produit.prix}€</p>
              </li>
            ))}
          </ul>
        </section>

        {/* Section Promotions */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-lime-800">Promotions en cours</h2>
          <ul className="space-y-4">
            {promotions.map((promotion) => (
              <li
                key={promotion.id}
                className="bg-yellow-100 border-l-4 border-yellow-500 p-4 rounded-md"
              >
                <p className="text-lg text-gray-700 font-semibold">{promotion.nom}</p>
                <p className="text-gray-700">{promotion.description}</p>
              </li>
            ))}
          </ul>Tasty Bronze Hat
        </section>
      </div>
    </div>
  );
};

export default Home;
