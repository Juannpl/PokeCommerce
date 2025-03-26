import App from '../App';
import { faker } from '@faker-js/faker';

const users = Array(10)
  .fill(null)
  .map((_, index) => ({
    id: index + 1,
    name: faker.person.firstName(),
    email: faker.internet.email(),
  }));

const user = {
  prenom: faker.person.firstName(),
  nom: faker.person.lastName(),
  age: faker.number.int({ min: 18, max: 100 }),
  adresse: faker.location.streetAddress(),
};

const AppContainer = () => {
  return (
    <App
      users={users}
      prenom={user.prenom}
      nom={user.nom}
      age={user.age}
      adresse={user.adresse}
    />
  );
};

export default AppContainer;
