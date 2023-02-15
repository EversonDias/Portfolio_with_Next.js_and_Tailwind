import React, {Component} from 'react';
import {ThemeProvider} from 'styled-components';
import Container from './style/app';
import Global from './style/global';
import Header from './partner/header';
import dark from './style/theme/dark';
import MyRoutes from './routes';
import light from './style/theme/light';

export default class App extends Component {
	constructor() {
		super();
		this.state = {
			theme: {
				type: '',
			},
		};
		this.toggleTheme = this.toggleTheme.bind(this);
		this.setTheme = this.setTheme.bind(this);
	}

	componentDidMount() {
		this.getTheme();
	}

	getTheme() {
		if (localStorage.getItem('theme')) {
			const theme = localStorage.getItem('theme');
			const {type} = JSON.parse(theme);
			this.setTheme(type);
		}
	}

	setTheme(type) {
		this.setState({
			theme: {
				type,
			},
		}, () => {
			const {theme} = this.state;
			this.saveThemeLocalStorage(theme);
		});
	}

	saveThemeLocalStorage(theme) {
		localStorage.setItem('theme', JSON.stringify(theme));
	}

	toggleTheme(e) {
		if (e) {
			this.setTheme('dark');
		} else {
			this.setTheme('light');
		}
	}

	render() {
		const {theme} = this.state;
		const setTheme = theme.type === 'dark';
		return (
			<ThemeProvider theme={setTheme ? dark : light}>
				<Container>
					<Global />
					<Header
						type={theme.type}
						toggleTheme={this.toggleTheme}
					/>
					<MyRoutes />
				</Container>
			</ThemeProvider>
		);
	}
}
