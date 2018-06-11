import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: "Max", age: Math.floor(Math.random() * 30) },
      { name: "May", age: Math.floor(Math.random() * 30) },
      { name: "June", age: Math.floor(Math.random() * 30) }
    ],
    showPersons: false
  }

  switchNameHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: "Max", age: Math.floor(Math.random() * 30) },
        { name: event.target.value, age: Math.floor(Math.random() * 30) },
        { name: "June", age: Math.floor(Math.random() * 30) }
      ]
    })
  }
  
  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;
    if( this.state.showPersons ) {

      persons = <div>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age} />
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          click={this.switchNameHandler}
          changed={this.nameChangedHandler}>My hobby is watching anime</Person>
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age} />
      </div>;
    }

    return (
      <div className="App">
        <h1>Hi React World!!</h1>
        <button 
          style={style} 
          onClick={this.switchNameHandler}>Switch Name</button>
        {persons}
      </div>
    );
  }
}

export default App;
