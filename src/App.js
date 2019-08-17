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
  }
  addNinja = (ninja) => {
    ninja.id = Math.random();
    let ninjas = [...this.state.ninjas, ninja]
    this.setState({
      ninjas: ninjas
    })
  }
  deleteNinja = (id) => {
    let ninjas = this.state.ninjas.filter(ninja => {
      return ninja.id !== id
    });
    this.setState({
      ninjas: ninjas
    })
  }
  componentDidMount() {
    console.log("Component mounted");
  }
  componentDidUpdate(prevProps, prevState) {
    console.log("Component updated");
    console.log(prevProps);
    console.log(prevState);
  }
  render() {
    return (<div className="App" >
      <h1>My first React app!</h1>
      <p>let's start</p>
      <Ninjas deleteNinja={this.deleteNinja} ninjas={this.state.ninjas} />
      <AddNinja addNinja={this.addNinja} />
    </div>);
  }
}

export default App;
