import React from 'react';
import Container from './styles';

function CardHomePage() {
	return (
		<Container>
			<img
				className='imgHome'
				src='https://github.com/EversonDias.png'
				alt='foto de perfil'
			/>
			<div className='containerText'>
				<h1 className='title' >Everson Dias</h1>
				<p className='describe'>Desenvolvedor: Full Stack</p>
				<p className='describe'>Seja bem-vindo ao meu portifólio website</p>
			</div>
		</Container>
	);
}

export default CardHomePage;
