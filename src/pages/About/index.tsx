export default function About() {
	return (
		<div id="SOBRE" className="pt-[10vh] flex flex-col items-center gap-5">
			<img
				className='rounded-full w-[300px] border-4 border-secondary hover:border-highlights duration-500 hover:scale-110'
				src='https://github.com/EversonDias.png'
				alt='foto de perfil'
			/>
			<div className='w-[90%] flex flex-col gap-4'>
				<p className='text-xl text-font'>Moro em São Paulo Capital, desde os meus 3 anos, em 2020 comecei a trabalhar de corretor Imobiliário, onde desenvolvi as habilidades de Negociação, gerenciamento de tempo, empreendedorismo, gestão de pessoas, resiliência e resolução de problemas.</p>
				<p className='text-xl text-font'>Atualmente estou estudando desenvolvimento web pela Trybe, onde estou desenvolvendo
					várias habilidades de soft skills e hard skills como HTML 5, CSS, JavaScrip, React, Node.js, Jest.js e RTL.</p>
			</div>
		</div>);
}
