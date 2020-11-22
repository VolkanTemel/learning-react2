import React, { Component } from 'react';
import classes from './App.css';
import Person from './Person/Person';

class App extends Component {
state={
  persons:[
    {id: 'a1', name: 'Volkan', age: 29 },
    {id: 'a2', name: 'aa', age: 27},
    {id: 'a3', name: 'bb', age: 28}
  ],
  otherState:'some other value',
  showPersons: false
}

namechangeHandler = (event, id) => {
const personIndex = this.state.persons.findIndex(p => {
  return p.id === id;
});

const person = {...this.state.persons[personIndex]};

person.name = event.target.value;
const persons = [...this.state.persons];
persons[personIndex] = person;

  this.setState({persons: persons})
}

deletePersonHandler = (personIndex) => {
const persons = [...this.state.persons];
persons.splice(personIndex, 1);
this.setState({persons:persons});
}

togglePersonsHandler = () => {
const doesShow = this.state.showPersons;
this.setState({showPersons: !doesShow});
}

render(){
  let persons=null;
  let btnClass = '';

  if(this.state.showPersons){
persons=(<div>
 {this.state.persons.map((person, index)=>{
   return <Person 
   click = {()=>this.deletePersonHandler(index)}
   name={person.name}
   age={person.age}
   key={person.id}
   changed={(event)=>this.namechangeHandler(event, person.id)}
   />
 })}
  </div>);
  btnClass = classes.Red;
  }
  let assignedClasses = [];
  if (this.state.persons.length<=2){
    assignedClasses.push(classes.red);
  }
  if(this.state.persons.length<=1){
    assignedClasses.push(classes.bold);
  }

    return (
      <div className={classes.App}>
       <h1>Hi, I'm a React App</h1>
       <p className={assignedClasses.join(' ')}>This is really working!</p>
       <button className={btnClass} onClick={this.togglePersonsHandler}>Toggle Persons</button>
      {persons}
       
      </div>
    );
  }
}

export default App;
