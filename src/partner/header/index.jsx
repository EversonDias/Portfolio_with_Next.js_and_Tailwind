/* eslint-disable require-jsdoc */
import React, {Component} from 'react';
import Container from './styles';
import Logo from '../../components/Logo';
import NavBar from '../../components/NavBar';

export default class Header extends Component {
  render() {
    return (
      <Container>
        <Logo/>
        <NavBar />
      </Container>
    );
  }
}
