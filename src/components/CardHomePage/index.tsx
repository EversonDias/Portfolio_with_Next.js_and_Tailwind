function CardHomePage() {
	return (
		<div className="flex items-end justify-end relative w-full">
			<h1 className='absolute top-24 left-1 text-3xl text-center font-bold font-sans' >
				<p className="hoverUnderline">EVERSON</p>
				<div>
					<p className="text-highlights hoverUnderline">DIAS</p>
				</div>
			</h1>
			<div className='absolute bottom-5 w-full text-2xl font-bold font-sans'>
				<p className="hoverUnderline">DESENVOLVEDOR: <span className="text-highlights">FULL STACK</span> </p>
				<p></p>
			</div>
			<img
				className='w-[300px]'
				src='images/home/perfil.png'
				alt='foto de perfil'
			/>
		</div>
	);
}

export default CardHomePage;
