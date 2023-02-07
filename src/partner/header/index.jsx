/* eslint-disable require-jsdoc */
import React, {Component} from 'react';
import Container from './styles';
import Logo from '../../components/Logo';
import NavBar from '../../components/NavBar';
import PropTypes from 'prop-types';

export default class Header extends Component {
  render() {
    const {toggleTheme, type} = this.props;
    return (
      <Container>
        <Logo/>
        <NavBar
          type={type}
          toggleTheme={toggleTheme}
        />
      </Container>
    );
  }
}

Header.propTypes = {
  toggleTheme: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
};
