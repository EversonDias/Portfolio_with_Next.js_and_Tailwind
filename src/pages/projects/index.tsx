import { useContext } from 'react';
import CardProject from '../../components/CardProject';
import { ProjectContext } from '../../contexts/ProjectContext/context';

export default function Projects() {
const {isIgnore, projects, handleListLimit, listLimit} = useContext(ProjectContext);

	
	return (
		<div id="PROJETO" className='pt-14 '>
			{projects.map(({ name, language, id, fork, description, homepage }, index: number) => (
				fork || isIgnore(id) ? '' : (
				<CardProject
					key={id}
					id={id}
					name={name}
					description={description}
					language={language}
					homepage={homepage}
					index={index}
				/>
			)
			))}
			<div className='text-center p-4'>
				<button className='border-t-0 border-4 w-full hover:bg-primary bg-transparent text-font border-secondary hover:border-highlights rounded-b-full hover:text-highlights font-bold duration-500' onClick={handleListLimit}>{listLimit === projects.length ? 'FECHA' : 'MAIS' }</button>
			</div>
		</div>
	);
}
