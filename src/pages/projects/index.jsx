
import React, {useState} from 'react';
import CardProject from '../../components/cardProject';
import Container from './projects';

export default function Projects() {
	const [projects, setProjects] = useState([]);

	const getProjects = async () => {
		const responseAPI = await fetch('https://api.github.com/users/EversonDias/repos');
		const responseJSON = await responseAPI.json();
		setProjects([...responseJSON]);
	};

	getProjects();

	const isIgnore = id => {
		const projectIgnore = [516911726, 538154747, 595723869];
		return projectIgnore.includes(id);
	};

	return (
		<div>
			<Container>
				{projects.map(({name, language, id, fork}) => (
					fork || isIgnore(id) ? '' : <CardProject
						key={id}
						name={name}
						language={language}
					/>
				))}
			</Container>
		</div>
	);
}
