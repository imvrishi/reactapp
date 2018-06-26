import React from 'react';
import Classes from './Cockpit.css';

const Cockpit = (props) => {
    let btnClass = '';

    if (props.showPersons) {
        btnClass = Classes.Red;
    }
    
    let classes = [];
    if( props.persons.length <= 2 )
    {
      classes.push(Classes.red);
    }
    if( props.persons.length <=1 )
    {
      classes.push(Classes.bold);
    }
    
    return (
        <div className={Classes.Cockpit}>
            <h1>Hi React World!!</h1>
            <p className={classes.join(' ')}>This is working!!</p>
            <button 
            className={btnClass}
            onClick={props.clicked}>Toggle Persons</button>
        </div>
    );
}

export default Cockpit;