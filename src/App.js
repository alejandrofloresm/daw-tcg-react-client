import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

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
    axios.get(`http://daw-tcg.test/api/cards`)
      .then(res => {
        const cards = res.data.data;
        this.setState({cards: cards});
      })
  }

  render() {
    return (
      <div className="App">
        <h1>Cartas</h1>
        <ul>
          {
            this.state.cards.map((card, index) => 
              <li key={index}>{card.name}</li>
            )
          }
        </ul>
      </div>
    );
  }
}

export default App;
