import App from '../App';
import { faker } from '@faker-js/faker';

const user = {
  prenom: faker.person.firstName(),
  nom: faker.person.lastName(),
  age: faker.number.int({ min: 18, max: 100 }),
  adresse: faker.location.streetAddress(),
  email: faker.internet.email(),
  bio: faker.person.bio(),
  avatarUrl: faker.image.avatar(),
  phone: faker.phone.number(),
  job: faker.person.jobTitle(),
};

const AppContainer = () => {
  return (
    <App
      prenom={user.prenom}
      nom={user.nom}
      age={user.age}
      adresse={user.adresse}
      email={user.email}
      bio={user.bio}
      avatarUrl={user.avatarUrl}
      phone={user.phone}
      job={user.job}
    />
  );
};

export default AppContainer;
