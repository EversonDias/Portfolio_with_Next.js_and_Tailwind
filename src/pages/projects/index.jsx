
import React, {Component} from 'react';
import CardProject from '../../components/cardProject';
import Container from './projects';

export default class Projects extends Component {
	constructor() {
		super();
		this.state = {
			projects: [],
		};
		this.getProjects = this.getProjects.bind(this);
	}

	componentDidMount() {
		this.getProjects();
	}

	async getProjects() {
		const responseAPI = await fetch('https://api.github.com/users/EversonDias/repos');
		const responseJSON = await responseAPI.json();
		this.setState({
			projects: responseJSON,
		});
	}

	isIgnore(id) {
		const projectIgnore = [516911726, 538154747, 595723869];
		return projectIgnore.includes(id);
	}

	render() {
		const {projects} = this.state;
		return (
			<div>
				<Container>
					{projects.map(({name, language, id, fork}) => (
						fork || this.isIgnore(id) ? '' : <CardProject
							key={id}
							name={name}
							language={language}
						/>
					))}
				</Container>
			</div>
		);
	}
}
