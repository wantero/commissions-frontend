import React, { Component } from 'react';

import './App.css';
import Navigation from '../components/Navigation'
import Message from '../components/Message'
import Routes from './Routes';

class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <div className="container">
          <div className="row">
            <div className="col">
              <Message />
            </div>
          </div>
          <div className="row">
            <Routes />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
