import React, { Component } from 'react';
import './CardsIndex.css';
import { Section, Container, Heading, Columns } from 'react-bulma-components';
import Card from './Card';
import axios from 'axios';

class CardsIndex extends Component {

  state = {
    cards: [{
      "id": 1,
      "name": "Cool Bison 2",
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
      <div>
        <Section>
          <Container>
            <Heading>Cartas</Heading>
          </Container>
        </Section>
        <Section>
          <Container>
            <Columns>
              {
                this.state.cards.map((card, index) => 
                  <Columns.Column key={index} size={3}>
                    <Card name={card.name} attack={card.attack} defense={card.defense}></Card>
                  </Columns.Column>
                )
              }
            </Columns>
          </Container>
        </Section>
      </div>
    );
  }
}

export default CardsIndex;
