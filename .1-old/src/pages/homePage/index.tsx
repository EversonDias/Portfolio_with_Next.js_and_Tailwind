import React from 'react';
import CardHomePage from '../../components/cardHomePage';
import Container from './styles';

export default function HomePage() {
	return (
		<Container>
			<CardHomePage />
			<img className='imgDesktop' src='/picture/home/home.svg' alt='home' />
		</Container>
	);
}
