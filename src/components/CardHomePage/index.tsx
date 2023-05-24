function CardHomePage() {
	return (
		<div id="INICIO" className="flex items-end justify-end relative w-full h-[80vh]">
			<h1 className='absolute top-48  left-1 text-4xl text-center font-bold font-sans z-[5]' >
				<p className="hoverUnderline ">EVERSON</p>
				<div>
					<p className="text-highlights hoverUnderline">DIAS</p>
				</div>
			</h1>
			<div id='TECHNOLOGY' className="absolute bg-slate-400 bottom-24"></div>
			<div  className='absolute bottom-5 w-full text-2xl font-bold font-sans z-[5]'>
				<p className="hoverUnderline">DESENVOLVEDOR: <span className="text-highlights">FULL STACK</span> </p>
				<p></p>
			</div>
			<img
				className='w-full absolute z-0 left-[80px]'
				src='images/home/perfil.png'
				alt='foto de perfil'
			/>
		</div>
	);
}

export default CardHomePage;
