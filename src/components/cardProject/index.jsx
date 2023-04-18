import React from 'react';
import PropTypes from 'prop-types';
import Container from './styles';

export default function CardProject({name}) {
	return (
		<Container>
			<img className='imgCard' src={`https://raw.githubusercontent.com/EversonDias/${name}/main/readme/cardProject/main.png`} alt={name} />
			<p className='title'>{name}</p>
		</Container>
	);
}

CardProject.propTypes = {
	name: PropTypes.string.isRequired,
	// Language: PropTypes.string.isRequired,
};
