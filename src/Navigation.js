import React, { Component } from 'react';
import './Navigation.css';
import { Navbar } from 'react-bulma-components';
import { NavLink } from 'react-router-dom';

class Navigation extends Component {

  state = {
    
  }

  render() {
    return (
      <div>
        <Navbar>
          <Navbar.Brand>
            <Navbar.Item renderAs="a" href="#">
              TCG Game
            </Navbar.Item>
          </Navbar.Brand>
          <Navbar.Menu>
            <Navbar.Container>
              <NavLink exact to="/">
                Inicio
              </NavLink>
            </Navbar.Container>
            <Navbar.Container>
              <NavLink exact to="/cards/create">
                Crear carta
              </NavLink>
            </Navbar.Container>
          </Navbar.Menu>
        </Navbar>
      </div>
    );
  }
}

export default Navigation;
