import React, {useEffect, useState} from 'react';
import history from '../../../history';
import Component from './styles';
import {FiExternalLink} from 'react-icons/fi';

export default function ProjectDetails() {
	const [projects, setProjects] = useState([]);
	const [project, setProject] = useState();
	const getProjects = async () => {
		const responseAPI = await fetch('https://api.github.com/users/EversonDias/repos');
		const responseJSON = await responseAPI.json();
		console.log(responseJSON);
		setProjects(responseJSON);
	};

	useEffect(() => {
		getProjects();
	}, []);

	useEffect(() => {
		const id = history.location.pathname.slice(10);
		const newProject = projects.filter(project => project.id === Number(id));
		console.log(newProject);
		setProject(...newProject);
	}, project);

	console.log();
	return (
		<Component>
			{
				project && (
					<ul>
						<li className='containerImg'>
							<img
								id={project.id}
								className='imgCard'
								src={`https://raw.githubusercontent.com/EversonDias/${project.name}/main/readme/cardProject/main.png`}
								alt={project.name} />
						</li>
						<li className='container'>
							<p className='title'>Nome</p>
							<p className='content'>{project.name}</p>
						</li>
						<li className='container'>
							<p className='title'>linguagem</p>
							<p className='content'>{project.language}</p>
						</li>
						<li className='container'>
							<p className='title'>descrição</p>
							<p className='content'>{project.description}</p>
						</li>
						<li className='container'>
							<p className='title'>Links</p>
							<div className='containerLinks'>
								<a className='content' target='_blank' href={`https://github.com/EversonDias/${project.name}/tree/main#readme`} rel='noreferrer'>Repositório <FiExternalLink/></a>
								{
									project.homepage && (
										<a className='content' href={project.homepage} target='_blank' rel='noreferrer'>Site demo <FiExternalLink/></a>
									)
								}
							</div>
						</li>

					</ul>
				)
			}
		</Component>
	);
}
