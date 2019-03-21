import React, { Component } from 'react';
import './CardsCreate.css';
import { Section, Container, Heading, Form, Button} from 'react-bulma-components';
import axios from 'axios';

class CardsCreate extends Component {

  state = {
    name: '',
    attack: 0,
    defense: 0,
    category_id: 0,
    categories: [

    ]
  }

  onChange = e => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    this.setState({
      [e.target.name]: value,
    });
  };

  onSubmit = e => {
    const { name, attack, defense, category_id } = this.state;
    let card = {name: name, attack: attack, defense: defense, category_id: category_id};
    axios.post(`http://daw-tcg.test/api/cards`, {
      card: card
    })
    .then(function (response) {
      console.log('response: ', response);
      window.location = '/';
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  componentWillMount() {
    axios.get(`http://daw-tcg.test/api/categories`)
      .then(res => {
        const categories = res.data.data;
        this.setState({categories: categories});
      })
  }

  render() {
    const { name, attack, defense, category_id } = this.state;
    return (
      <div>
        <Section>
          <Container>
            <Heading>Creación de cartas</Heading>
          </Container>
        </Section>
        <Section>
          <Container>
            <Form.Field>
              <Form.Label>
                Nombre
              </Form.Label>
              <Form.Control>
                <Form.Input onChange={this.onChange} value={name} name="name"></Form.Input>
              </Form.Control>
            </Form.Field>
            <Form.Field>
              <Form.Label>
                Ataque
              </Form.Label>
              <Form.Control>
                <Form.Input onChange={this.onChange} value={attack} name="attack"></Form.Input>
              </Form.Control>
            </Form.Field>
            <Form.Field>
              <Form.Label>
                Defensa
              </Form.Label>
              <Form.Control>
                <Form.Input onChange={this.onChange} value={defense} name="defense"></Form.Input>
              </Form.Control>
            </Form.Field>
            <Form.Field>
              <Form.Label>
                Categoría
              </Form.Label>
              <Form.Control>
                <Form.Select onChange={this.onChange} name="category_id" value={category_id}>
                  <option value="0">Selecciona una categoría</option>
                  {
                    this.state.categories.map((category, index) => 
                      <option key={index} value={category.id}>{category.name}</option>
                    )
                  }
                </Form.Select>
              </Form.Control>
            </Form.Field>
            <Form.Field>
              <Button onClick={this.onSubmit}>Crear carta</Button>
            </Form.Field>
          </Container>
        </Section>
      </div>
    );
  }
}

export default CardsCreate;
