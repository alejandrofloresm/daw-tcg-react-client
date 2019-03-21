import React, { Component } from 'react';
import './Layout.css';
import { Route } from 'react-router-dom';
import CardsIndex from './CardsIndex';
import CardsCreate from './CardsCreate';
import Navigation from './Navigation';

class Layout extends Component {

  state = {
    
  }

  render() {
    return (
      <div>
        <Navigation />
        <div className="content">
          <Route exact path="/" component={CardsIndex} />
          <Route exact path="/cards/create" component={CardsCreate} />
        </div>
      </div>
    );
  }
}

export default Layout;
