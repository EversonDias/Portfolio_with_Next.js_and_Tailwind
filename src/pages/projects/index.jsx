import React, {useEffect, useState} from 'react';
import CardProject from '../../components/cardProject';
import Container from './styles';
import icons from '../../utils/icons.json';
import {BsFillGrid3X3GapFill} from 'react-icons/bs';

export default function Projects() {
	const [listOfFilters, setListOfFilters] = useState([]);
	const [projects, setProjects] = useState([]);
	const [oldProjects, setOldProjects] = useState([]);
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
					{listOfFilters.length > 0 && (
						<ul className='listFilters'>
							{listOfFilters.map(filter => (
								<li key={filter} className='containerButton' onClick={ handleFilter }>
									<button
										className='buttonFilter'
									>
										<i className={icons[filter.toLowerCase()]}></i>
										<p>{filter}</p>
									</button>
								</li>
							))}
							<li className='containerButton'>
								<button
									className='buttonFilter'
									onClick={ () => setProjects(oldProjects) }
								>
									<BsFillGrid3X3GapFill/>
									<p>Todos</p>
								</button></li>
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
