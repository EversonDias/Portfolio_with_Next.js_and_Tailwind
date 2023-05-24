// import {useEffect, useState} from 'react';
// import {FiExternalLink} from 'react-icons/fi';

export default function ProjectDetails() {
	// const [projects, setProjects] = useState([]);
	// const [project, setProject] = useState();
	// const getProjects = async () => {
	// 	const responseAPI = await fetch('https://api.github.com/users/EversonDias/repos');
	// 	const responseJSON = await responseAPI.json();
	// 	console.log(responseJSON);
	// 	setProjects(responseJSON);
	// };

	// useEffect(() => {
	// 	getProjects();
	// }, []);

	// useEffect(() => {
	// 	const id = history.location.pathname.slice(10);
	// 	const newProject = projects.filter(project => project.id === Number(id));
	// 	console.log(newProject);
	// 	setProject(...newProject);
	// }, project);

	return (
		<div>
			{/* {
				project && (
					<ul>
						<li className='containerImg'>
							<a target='_blank' href={project.homepage ? project.homepage : `https://github.com/EversonDias/${project.name}/tree/main#readme` } rel='noreferrer'>
								<object id={project.id} className='imgCard' data={`https://raw.githubusercontent.com/EversonDias/${project.name}/main/readme/cardProject/main.png`} type='image/png'>
									<img
										id={project.id}
										className='imgCard'
										src='/picture/cardProject/underConstruction.png'
										alt={project.name} />
								</object>
							</a>
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
			} */}
		</div>
	);
}
