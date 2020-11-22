import React, { Component } from 'react';
import './App.css';
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
  const style = {
    backgroundColor: 'green',
    color: 'white',
    font: 'inherit',
    border: '1px solid blue',
    padding: '8px',
    cursor: 'pointer',
    ':hover':{
      backgroundColor: 'lightgreen',
      color: 'black'
    }
  };
  let persons=null;
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
  // style.backgroundColor= 'red';
  // style[':hover']={
  //   backgroundColor: 'salmon',
  //   color: 'black'
  // }
  }
  let classes = [];
  if (this.state.persons.length<=2){
    classes.push('red');
  }
  if(this.state.persons.length<=1){
    classes.push('bold');
  }

    return (
      <div className="App">
       <h1>Hi, I'm a React App</h1>
       <p className={classes.join(' ')}>This is really working!</p>
       <button className="button" onClick={this.togglePersonsHandler}>Toggle Persons</button>
      {persons}
       
      </div>
    );
  }
}

export default App;
