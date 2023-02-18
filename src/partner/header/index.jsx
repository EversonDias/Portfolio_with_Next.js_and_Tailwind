import React from 'react';
import Container from './styles';
import Logo from '../../components/Logo';
import NavBar from '../../components/NavBar';
import PropTypes from 'prop-types';

export default function Header({toggleTheme, type}) {
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

Header.propTypes = {
	toggleTheme: PropTypes.func.isRequired,
	type: PropTypes.bool.isRequired,
};
