import React from 'react';
import Container from './styles';
import Logo from '../../components/Logo';
import NavBar from '../../components/NavBar';

export default function Header() {
	return (
		<Container>
			<div className='logo'>
				<Logo type={type}/>
			</div>
			<NavBar
				type={type}
				toggleTheme={toggleTheme}
			/>
		</Container>
	);
}
