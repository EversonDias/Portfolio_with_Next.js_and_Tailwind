import Background from "../Background";

function CardHomePage() {
	return (
		<div className="flex items-end justify-end relative w-full md:h-[100vh]">
			<div id="INICIO" className="absolute -top-[10vh]">
			</div>
			<h1 className='absolute top-48 left-1 text-4xl text-center font-bold font-sans z-[5] md:text-7xl md:top-80 md:left-[5%]' >
				<p className="hoverUnderline ">EVERSON</p>
				<div>
					<p className="text-highlights hoverUnderline">DIAS</p>
				</div>
			</h1>
			<div id='TECHNOLOGY' className="absolute bg-slate-400 bottom-24"></div>
			<Background />
			<div className='absolute bottom-5 w-full text-2xl font-bold font-sans z-[5] sm:left-[35%] md:w-auto md:text-5xl md:right-[5%]'>
				<p className="hoverUnderline">DESENVOLVEDOR: <span className="text-highlights">FULL STACK</span> </p>
				<p></p>
			</div>
		</div>
	);
}

export default CardHomePage;
