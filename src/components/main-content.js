import React, { Component } from 'react';
import './main-content.css';

class MainContent extends Component {
  render() {
    return (
      <div className="main-content">
				<div className="main1">
					<h2>Main Heading One</h2>
					<p>lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo
						commodi consequuntur neque, repellat amet tempore.</p>
				</div>
				<div className="main1">
					<h2>Main Heading Two</h2>
					<p>lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo
						commodi consequuntur neque, repellat amet tempore.</p>
				</div>
				<div className="main1">
					<h2>Main Heading Three</h2>
					<p>lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo
						commodi consequuntur neque, repellat amet tempore.</p>
				</div>
      </div>
    );
  }
}

export default MainContent;
