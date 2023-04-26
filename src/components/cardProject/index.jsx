import React from 'react';
import PropTypes from 'prop-types';
import Container from './styles';
import history from '../../history';

export default function CardProject({name, id}) {
	const handleDetailProject = ({target}) => {
		history.push(`/projects/${target.id}`);
		window.location.reload();
	};

	return (
		<Container onClick={ handleDetailProject } id={id} >
			<img
				id={id}
				className='imgCard'
				src={`https://raw.githubusercontent.com/EversonDias/${name}/main/readme/cardProject/main.png`}
				alt={name} />
			<p
				id={id}
				className='title'
			>
				{name}
			</p>
		</Container>
	);
}

CardProject.propTypes = {
	name: PropTypes.string.isRequired,
	id: PropTypes.number.isRequired,
	// Language: PropTypes.string.isRequired,
};
