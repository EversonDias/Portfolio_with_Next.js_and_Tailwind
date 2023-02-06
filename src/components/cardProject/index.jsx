/* eslint-disable require-jsdoc */
import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class CardProject extends Component {
  render() {
    const {name, language} = this.props;
    return (
      <div>
        <p>{name}</p>
        <p>{language}</p>
      </div>
    );
  }
}

CardProject.propTypes = {
  name: PropTypes.string.isRequired,
  language: PropTypes.string.isRequired,
};
