import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  state = {
    cards: [{
      "id": 1,
      "name": "Cool Bison",
      "attack": "28.00",
      "defense": "5.00",
      "created_at": "2019-02-07 18:07:22",
      "updated_at": "2019-02-07 18:07:22",
      "category_id": "2"
    }]
  }

  componentWillMount() {
    
  }

  render() {
    return (
      <div className="App">
        <h1>Cartas</h1>
        <ul>
          {
            this.state.cards.map((card, index) => 
              <li>{card.name}</li>
            )
          }
        </ul>
      </div>
    );
  }
}

export default App;
