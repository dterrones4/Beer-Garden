import React, { Component } from 'react';
import Banner from './banner';
import TopBar from './top-bar';
import MainContent from './main-content';
import Contact from './contact';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TopBar />
        <Banner />
        <MainContent />
        <Contact />
      </div>
    );
  }
}

export default App;
