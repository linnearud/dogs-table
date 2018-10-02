import React, { Component } from 'react';
import logo from './IMG_2712.png';
import { Jumbotron, Navbar, Nav, NavItem } from 'react-bootstrap'
import './App.css';
import DogsTable from './DogsTable'
import DogsChart from './DogsChart'
import DogsList from './DogsList'
import * as d3 from 'd3-fetch'

class App extends Component {
  state = { data: null, year: null }
  yearSelected = (selectedKey) => {
    d3.csv("data/" + selectedKey + ".csv").then(data => {
      this.setState({data: data, year: selectedKey})
    })
  }
  render() {
    let jumbo = <Jumbotron>
                 <img src={logo} className="App-logo" alt="logo" />
                 <h1>Dog Exploring!</h1>
                </Jumbotron>
    let navbar = <Navbar>
                  <Nav onSelect={this.yearSelected}>
                    <NavItem eventKey={"2007"} > 2007 </NavItem>
                    <NavItem eventKey={"2008"} > 2008 </NavItem>
                    <NavItem eventKey={"2009"} > 2009 </NavItem>
                    <NavItem eventKey={"2010"} > 2010 </NavItem>
                    <NavItem eventKey={"2011"} > 2011 </NavItem>
                    <NavItem eventKey={"2012"} > 2012 </NavItem>
                    <NavItem eventKey={"2013"} > 2013 </NavItem>
                    <NavItem eventKey={"2014"} > 2014 </NavItem>
                    <NavItem eventKey={"2015"} > 2015 </NavItem>
                    <NavItem eventKey={"2016"} > 2016 </NavItem>
                    <NavItem eventKey={"2017"} > 2017 </NavItem>
                  </Nav>
                </Navbar>
    if (this.state.data) {
      return (
        <div className="App">
          {jumbo}
          {navbar}
          <div className="dogs-charts">
            <DogsChart data={this.state.data} year={this.state.year}/>
            <DogsList data={this.state.data} year={this.state.year}/>
          </div>
          <DogsTable data={this.state.data}/>
        </div>
      );
    }else {
      return (
        <div className="App">
          {jumbo}
          {navbar}
          <div className="App-info">
            Press any year to start exploring.
          </div>
        </div>
      );
    }
  }
}

export default App;
