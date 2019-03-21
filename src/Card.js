import React, { Component } from 'react';
import './Card.css';

class Card extends Component {

  state = {
    
  }

  render() {
    return (
      <p className="bd-notification is-success">
        {this.props.name} (a: {this.props.attack} / d: {this.props.defense})
      </p>
    );
  }
}

export default Card;
