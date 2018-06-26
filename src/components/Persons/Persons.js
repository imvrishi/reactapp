import React from 'react';
import Person from './Person/Person';

const Persons = (props) => props.persons.map((person, index) => {
    return <Person
        key={person.id}
        click={props.clicked.bind(this, index)}
        changed={(e) => props.changed(e, person.id)}
        name={person.name}
        age={person.age} />
    });

export default Persons;