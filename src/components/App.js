import React, { Component } from 'react';

import Header from './layout/Header';
import Search from './layout/Search';
import Display from './layout/Display';


class App extends Component {
  render() {
    return (
      <div>
        <Header></Header>
        <Search></Search>
        <Display></Display>
      </div>
    );
  }
}

export default App;
