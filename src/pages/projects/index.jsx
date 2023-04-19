import React, {useEffect, useState} from 'react';
import CardProject from '../../components/cardProject';
import Container from './styles';

export default function Projects() {
	const [projects, setProjects] = useState([]);
	const [oldProjects, setOldProjects] = useState([]);
	const [listOfFilters, setListOfFilters] = useState([]);
	const getProjects = async () => {
		const responseAPI = await fetch('https://api.github.com/users/EversonDias/repos');
		const responseJSON = await responseAPI.json();
		setProjects([...responseJSON]);
		setOldProjects([...responseJSON]);
	};

	useEffect(() => {
		getProjects();
	}, []);

	useEffect(() => {
		createFilter();
	}, [projects]);

	const isIgnore = id => {
		const projectIgnore = [516911726, 538154747, 595723869];
		return projectIgnore.includes(id);
	};

	const createFilter = () => {
		const listOfProjects = [];
		oldProjects.forEach(project => {
			const {language} = project;
			if (language !== null) {
				listOfProjects.push(language);
			}
		});
		const nonRepeatingFilterList = [...new Set(listOfProjects)];
		setListOfFilters(nonRepeatingFilterList);
	};

	const handleFilter = ({target: {innerText}}) => {
		const newListOfProjects = oldProjects.filter(({language}) => language === innerText);
		setProjects(newListOfProjects);
	};

	return (
		<div>
			<Container>
				<div className='containerFilters'>
					<h2>Filtros</h2>
					{listOfFilters.length > 0 && (
						<ul className='listFilters'>
							{listOfFilters.map(filter => (
								<li key={filter}>
									<button
										className='buttonFilter'
										onClick={ handleFilter }
									>{filter}</button>
								</li>
							))}
							<li><button
								className='buttonFilter'
								onClick={ () => setProjects(oldProjects) }
							>Todos</button></li>
						</ul>
					)}
				</div>
				<div className='containerProjects'>
					{projects.map(({name, language, id, fork}) => (
						fork || isIgnore(id) ? '' : (
							<CardProject
								key={id}
								id={id}
								name={name}
								language={language}
							/>
						)
					))}
				</div>
			</Container>
		</div>
	);
}
