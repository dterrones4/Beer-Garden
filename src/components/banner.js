import React, { Component } from 'react';
import './banner.css'; 
import TopBar from './top-bar';
import MobileNav from './mobile-nav';

class Banner extends Component {
  render() {
    return (
    <div className="banner">
      <TopBar />
      <MobileNav />
      <div className='banner-text'>
        <div className ='banner-text-items'>
          <h2>Midland Beer Garden</h2>
          <p>Example Extra Content Text!
          </p>
        </div>
      </div>
    </div>
    );
  }
}

export default Banner;