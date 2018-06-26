import React, { Component } from 'react';
import Classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
  state = {
    persons: [
      { id: "asdf1", name: "Max", age: Math.floor(Math.random() * 30) },
      { id: "asdf2", name: "May", age: Math.floor(Math.random() * 30) },
      { id: "asdf3", name: "June", age: Math.floor(Math.random() * 30) }
    ],
    showPersons: false
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => p.id === id);
    const persons = [...this.state.persons];
    const person = {...persons[personIndex]};
    person.name = event.target.value;
    persons[personIndex] = person;
    this.setState({persons: persons});
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }
  
  render() {
    
    let persons = null;

    if( this.state.showPersons ) {
      persons = (
        <div>
          <Persons 
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler} />
        </div>
      );
    }

    return (
      <div className={Classes.App}>
        <Cockpit
          clicked={this.togglePersonHandler}
          persons={this.state.persons}
          showPersons={this.state.showPersons} />
        {persons}
      </div>
    );
  }
}

export default App;
