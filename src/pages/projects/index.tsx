import { useContext } from 'react';
import CardProject from '../../components/CardProject';
import { ProjectContext } from '../../contexts/ProjectContext/context';

export default function Projects() {
	const { projects, handleListLimit, listLimit } = useContext(ProjectContext);

	return (
		<div id="PROJETO">
			<div className='text-center pt-14 md:p-20'>
				<p className='text-2xl p-4 hoverUnderline md:text-5xl md:font-bold md:p-5'>PROJETOS</p>
			</div>
			<div className='md:grid xl:grid-cols-3 xl:w-[90%] md:grid-cols-2 2xl:grid-cols-4 md:w-full md:m-auto'>
				{projects.map(({ name, language, id, description, homepage }, index: number) => (
					<CardProject
						key={id}
						id={id}
						name={name}
						description={description}
						language={language}
						homepage={homepage}
						index={index}
					/>
				))}
			</div>
			<div className='text-center p-4'>
				<button className='border-t-0 border-4 w-full hover:bg-primary bg-transparent text-font border-secondary hover:border-highlights rounded-b-full hover:text-highlights font-bold duration-500' onClick={handleListLimit}>{listLimit === projects.length ? 'FECHA' : 'VER MAIS'}</button>
			</div>
		</div>
	);
}
