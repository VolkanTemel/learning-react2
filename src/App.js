import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
state={
  persons:[
    { name: 'Volkan', age: 29 },
    { name: 'aa', age: 27},
    { name: 'bb', age: 28}
  ],
  otherState:'some other value'
 
}

 
switchNameHandler = (newName) => {
  this.setState({
    persons:[
    { name: newName, age: 29 },
    {name: 'aaa', age: 28},
    {name: 'bbb', age: 29}
  ]
})
}

namechangeHandler = (event) => {
  this.setState({
    persons:[
    { name: "Volkan", age: 29 },
    { name: event.target.value, age: 27},
    {name:'bb', age: 28}
  ]
})
}

render(){
  const style = {
    backgroundColor: 'white',
    font: 'inherit',
    border: '1px solid blue',
    padding: '8px',
    cursor: 'pointer'
  }
    return (
      <div className="App">
       <h1>Hi, I'm a React App</h1>
       <p>This is really working!</p>
       <button style={style} onClick={()=>this.switchNameHandler('Volcano')}>Switch Name</button>
       <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
       <Person name={this.state.persons[1].name} age={this.state.persons[1].age}
       click={()=>this.switchNameHandler('Volkan')}
       clicked={this.namechangeHandler}
       changed={this.namechangeHandler}
       >My Hobbies: Racing</Person>
       <Person name={this.state.persons[2].name} age={this.state.persons[2].age} 
       />
      </div>
    );
  }
}

export default App;
