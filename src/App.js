import React, { Component } from 'react';
import Classes from './App.css';
import Person from './Person/Person';

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
    let btnClass = '';

    if( this.state.showPersons ) {

      persons = (
        <div>
          {this.state.persons.map((person, index) => {
          return <Person 
            key={person.id}
            click={this.deletePersonHandler.bind(this, index)}
            changed={this.nameChangedHandler.bind(this, person.id)} 
            name={person.name} 
            age={person.age} />
          })}
        </div>
      );

      btnClass = Classes.Red;
    }

    let classes = [];
    if( this.state.persons.length <= 2 )
    {
      classes.push(Classes.red);
    }
    if( this.state.persons.length <=1 )
    {
      classes.push(Classes.bold);
    }

    return (
      <div className={Classes.App}>
        <h1>Hi React World!!</h1>
        <p className={classes.join(' ')}>This is working!!</p>
        <button 
          className={btnClass}
          onClick={this.togglePersonHandler}>Toggle Persons</button>
        {persons}
      </div>
    );
  }
}

export default App;
