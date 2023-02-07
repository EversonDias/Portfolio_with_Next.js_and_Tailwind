/* eslint-disable require-jsdoc */
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Container from './cardProject';

export default class CardProject extends Component {
  render() {
    const {name, language} = this.props;
    return (
      <Container>
        <p>{name}</p>
        <p>{language}</p>
      </Container>
    );
  }
}

CardProject.propTypes = {
  name: PropTypes.string.isRequired,
  language: PropTypes.string.isRequired,
};
