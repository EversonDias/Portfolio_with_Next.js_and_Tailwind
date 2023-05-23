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
			<object id={id} className='imgCard' data={`https://raw.githubusercontent.com/EversonDias/${name}/main/readme/cardProject/main.png`} type='image/png'>
				<img
					id={id}
					className='imgCard'
					src='/picture/cardProject/underConstruction.png'
					alt={name} />
			</object>
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
