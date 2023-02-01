/* eslint-disable require-jsdoc */
import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class NavBar extends Component {
  render() {
    return (
      <nav>
        <Link to='/projects'>Projetos</Link>
        <Link to ='/about'>Sobre</Link>
      </nav>
    );
  }
}
