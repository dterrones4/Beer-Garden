import React, { Component } from 'react';
import Banner from './banner';
import MainContent from './main-content';
import Contact from './contact';
 //FontAwesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

library.add(faBars)

class App extends Component {
  render() {
    return (
      <div className="App">
        <Banner />
        <MainContent />
        <Contact />
      </div>
    );
  }
}

export default App;
