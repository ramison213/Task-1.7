import React, { Component } from 'react';
import './App.css';
import Card from './Components/Card.js'

export default class App extends Component {
  state = {
    userData: {
        id: 4253,
        firstName: 'Павел',
        secondName: 'Гапоненко',
        imgUrl: 'https://randomuser.me/api/portraits/men/10.jpg ',
        born: 'не указан',
        tel: '050-050-050-0',
        email: 'random-email@gmail.com',
        address: 'Odessa'
      },
  };

  render() {
    return (
      <div className="container">
        <Card user={ this.state.userData } />
      </div>
    );
  }
}
