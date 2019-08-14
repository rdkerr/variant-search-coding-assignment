import React, { Component } from 'react';
import cors from 'cors';

import Header from './layout/Header';
import Search from './layout/Search';
import Display from './layout/Display';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      names: [],
      results: []
    };
  }

  search = name => {
    fetch(`http://localhost:5000/gene/${name}`)
      .then(res => res.json())
      .then(results => this.setState({ results }))
  }

  componentDidMount() {
    fetch('http://localhost:5000/names')
      .then(res => res.json())
      .then(results => {
        this.setState({ names: results.map(result => result['gene'])})
      });
  }

  render() {
    const { names, results } = this.state;
    const { search } = this;
    return (
      <div>
        <Header></Header>
        <Search suggestions={names} search={search}></Search>
        <Display results={results}></Display>
      </div>
    );
  }
}

export default App;
