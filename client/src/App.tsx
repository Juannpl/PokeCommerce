import { Component } from 'react';
import { faker } from '@faker-js/faker';
import Header from './components/Header';

interface AppState {
  prenom: string;
  nom: string;
  age: number;
  adresse: string;
}

class App extends Component<{}, AppState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      prenom: faker.person.firstName(),
      nom: faker.person.lastName(),
      age: faker.number.int({ min: 18, max: 100 }),
      adresse: faker.location.streetAddress(),
    };
  }

  render() {
    return (
      <div>
        <Header
          prenom={this.state.prenom}
          nom={this.state.nom}
          age={this.state.age}
          adresse={this.state.adresse}
        />
      </div>
    );
  }
}

export default App;

