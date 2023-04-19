import React from 'react';
import Container from './styles';

export default function About() {
	return (
		<Container>
			<img
				className='imgHome'
				src='https://github.com/EversonDias.png'
				alt='foto de perfil'
			/>
			<div className='containerAbout'>
				<h1 className='titleAbout'>Olá, eu Sou Everson Dias</h1>
				<p className='pAbout'>Moro em São Paulo Capital, desde os meus 3 anos, em 2020 comecei a trabalhar de corretor Imobiliário, onde desenvolvi as habilidades de Negociação, gerenciamento de tempo, empreendedorismo, gestão de pessoas, resiliência e resolução de problemas.</p>
				<p className='pAbout'>Atualmente estou estudando desenvolvimento web pela Trybe, onde estou desenvolvendo
				várias habilidades de soft skills e hard skills como HTML 5, CSS, JavaScrip, React, Node.js, Jest.js e RTL.</p>
			</div>
			<section className='containerTecnologia'>
				<h1 className='titleTecnologia'>TECNOLOGIAS</h1>
				<div className='containerIcons'>
					<i className='devicon-html5-plain'></i>
					<i className='devicon-css3-plain'></i>
					<i className='devicon-javascript-plain'></i>
					<i className='devicon-react-original-wordmark'></i>
					<i className='devicon-nodejs-plain'></i>
					<i className='devicon-docker-plain-wordmark'></i>
					<i className='devicon-express-original-wordmark'></i>
					<i className='devicon-github-original-wordmark'></i>
					<i className='devicon-git-plain-wordmark'></i>
					<i className='devicon-mysql-plain-wordmark'></i>
					<i className='devicon-npm-original-wordmark'></i>
				</div>
			</section>
		</Container>);
}
