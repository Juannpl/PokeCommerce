import { faker } from '@faker-js/faker';

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

const Home = () => {
  return (
    <div>
      <h2>Produits récents</h2>
      <ul>
        {produits.map((produit) => (
          <li key={produit.id}>{produit.nom}</li>
        ))}
      </ul>

      <h2>Promotions en cours</h2>
      <ul>
        {promotions.map((promotion) => (
          <li key={promotion.id}>{promotion.nom}</li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
