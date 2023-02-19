import React from 'react';
import Container from './styles';
import Logo from '../../components/Logo';
import NavBar from '../../components/NavBar';

export default function Header() {
	return (
		<Container>
			<Logo/>
			<NavBar/>
		</Container>
	);
}
