import { useContext } from "react";
import { cardItem } from "../../types";
import { ProjectContext } from "../../contexts/ProjectContext/context";
import icons from '../../utils/icons';
import {FiExternalLink} from 'react-icons/fi';

export default function CardProject({name,description,id,language, homepage, index}: cardItem,) {
	const {handleModal, activeModal,listLimit} = useContext(ProjectContext);
	
	return (
		<div className={`w-[90%] m-auto mt-10 [&>div>button]:hover:bg-primary hover:bg-highlights [&>div>button]:hover:text-highlights bg-secondary overflow-hidden rounded-lg border-none [&>object]:hover:scale-110 duration-500 ${index > listLimit && "hidden"}`}>
			<object id={String(id)} className='w-[110%] ' data={`https://raw.githubusercontent.com/EversonDias/${name}/main/readme/cardProject/main.png`} type='image/png'>
						<img
						id={String(id)}
						className='w-full'
						src='/images/cardProject/underConstruction.png'
						alt={name} />
				</object>
			<div className="p-4 flex flex-col gap-4 text-center">
				<p
					className='text-2xl font-bold'
				>
					{name}
				</p>
				<button className="btn hover:bg-primary bg-highlights text-primary hover:text-highlights m-auto" id={String(id)} onClick={handleModal}>Detalhes</button>
		</div>
			{
				activeModal === String(id) && (
				<div className="backdrop-blur-sm fixed top-0 h-[100vh] w-full flex justify-center items-center z-20 text-font">
					<div className="flex flex-col items-end bg-secondary w-[90%] p-4 rounded-md">
						<button id="" className="btn btn-circle mb-4 bg-highlights text-primary" onClick={handleModal}>
												<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
						</button>
						<div className="w-full">
							<div className="flex justify-center">
								<p className="text-2xl font-bold hoverUnderline mb-2 ">Linguagem</p>
							</div>
							<p className="text-xl flex gap-4 items-center justify-center text-center hover:text-highlights">
								<i className={icons[language.toLowerCase()]}></i>
								{language}
								</p>
							<p className="text-2xl font-bold hoverUnderline mb-2 mt-4">Descrição</p>
							<p className="text-xl w-full">{description}</p>
						</div>
						<div className="flex w-full justify-evenly mt-4">
						<a className='flex gap-2 hover:text-highlights text-xl' target='_blank' href={`https://github.com/EversonDias/${name}/tree/main#readme`} rel='noreferrer'>Repositório <FiExternalLink/></a>
								{
									homepage && (
										<a className='flex gap-2 hover:text-highlights text-xl' href={homepage} target='_blank' rel='noreferrer'>Site demo <FiExternalLink/></a>
									)
								}
						</div>
					</div>
				</div>
				)
			}
			
		</div>
	);
}