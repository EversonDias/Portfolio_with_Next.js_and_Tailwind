import icons from '../../utils/icons';

export default function About() {
	const listIcons = Object.values(icons);
	return (
		<div>
			<img
				className='imgHome'
				src='https://github.com/EversonDias.png'
				alt='foto de perfil'
			/>
			<div className='divAbout'>
				<p className='pAbout'>Moro em São Paulo Capital, desde os meus 3 anos, em 2020 comecei a trabalhar de corretor Imobiliário, onde desenvolvi as habilidades de Negociação, gerenciamento de tempo, empreendedorismo, gestão de pessoas, resiliência e resolução de problemas.</p>
				<p className='pAbout'>Atualmente estou estudando desenvolvimento web pela Trybe, onde estou desenvolvendo
					várias habilidades de soft skills e hard skills como HTML 5, CSS, JavaScrip, React, Node.js, Jest.js e RTL.</p>
			</div>
			<section className='containerTecnologia'>
				<h1 className='titleTecnologia'>TECNOLOGIAS</h1>
				<div className='containerIcons'>
					{listIcons.map(icon => <i key={icon} className={icon} ></i>)}
				</div>
			</section>
		</div>);
}
