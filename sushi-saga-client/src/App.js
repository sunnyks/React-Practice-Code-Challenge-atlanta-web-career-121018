import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  constructor() {
    super()
    // set budget in here?
    // i did this shtuff
    this.state = {
      budget: 14300,
      sushiList: [],
      eatenSushi: []
    }
  }

  render() {
    return (
      <div className="app">
        <SushiContainer  belt={this.getBelt()} moveBelt={this.moveBelt} eatenSushi={this.state.eatenSushi} eatSushi={this.eatSushi}/> // qtf!!!!!!!!!!!!!!
        <Table budget={this.state.budget} eatenSushi={this.state.eatenSushi}/>
      </div>
    );
  }

  componentDidMount() {
    // set state
    fetch(API).then(res => res.json()).then((data) => {
      console.log(data)
      this.setState({
        sushiList: data
      })
      // return data
    })
  }

  getBelt = () => {
    return this.state.sushiList.slice(0,4)
  }

  moveBelt = () => {
    var sushi = this.state.sushiList
    const thankUNext = sushi.shift()
    console.log(thankUNext)
    sushi.push(thankUNext)
    this.setState({
      sushiList: sushi
    })
    // this.state.sushiList.push(thankUNext)
    // setstate
  }

  getBudget = () => {
    return this.state.budget
  }

  eatSushi = (sushi) => {
    if (sushi.price > this.state.budget) return
    const yum = this.state.eatenSushi
    yum.push(sushi)
    this.setState({
      budget: this.state.budget - sushi.price,
      eatenSushi: [...this.state.eatenSushi, sushi]
    })

    // this.setState({
      // eatenSushi: [...this.state.eatenSushi, sushi]
      // })
  }
}

export default App;
