import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Container from './cardProject';

export default class CardProject extends Component {
	render() {
		const {name} = this.props;
		return (
			<Container>
				<img className='imgCard' src={`https://raw.githubusercontent.com/EversonDias/${name}/main/readme/cardProject/main.png`} alt={name} />
				<p className='title'>{name}</p>
			</Container>
		);
	}
}

CardProject.propTypes = {
	name: PropTypes.string.isRequired,
	// Language: PropTypes.string.isRequired,
};
