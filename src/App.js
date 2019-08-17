import React, { Component } from 'react';
import Ninjas from './Ninjas';
import AddNinja from './AddNinja';

class App extends Component {
  state = {
    ninjas: [
      { name: 'Red', age: 20, belt: 'green', id: 1 },
      { name: 'Blue', age: 25, belt: 'red', id: 2 },
      { name: 'Green', age: 30, belt: 'blue', id: 3 }
    ]
  };
  render() {
    return (<div className="App" >
      <h1>My first React app!</h1>
      <p>let's start</p>
      <Ninjas ninjas={this.state.ninjas} />
      <AddNinja />
    </div>);
  }
}

export default App;
