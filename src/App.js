import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
state={
  persons:[
    { name: 'Volkan', age: 29 },
    { name: 'Ahmet', age: 27}
  ]
}


  render() {
    return (
      <div className="App">
       <h1>Hi, I'm a React App</h1>
       <p>This is really working!</p>
       <button>Switch Name</button>
       <Person name={this.state[0].name} age={this.state[0].age}/>
       <Person name={this.state[1].name} age={this.state[1].age}>My Hobbies: Racing</Person>
      </div>
    );
  }
}

export default App;
