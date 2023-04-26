import React, {useState} from 'react';
import {ThemeProvider} from 'styled-components';
import Container from './style/app';
import Global from './style/global';
import Header from './partner/header';
import MyRoutes from './routes';
import dark from './style/theme/dark';
import light from './style/theme/light';
import ListMenu from './components/listMenuHamburger';

export default function App() {
	const [theme, setTheme] = useState(localStorage.getItem('dark') === 'true' || false);
	const saveThemeLocalStorage = theme => {
		localStorage.setItem('dark', JSON.stringify(theme));
	};

	const toggleTheme = () => {
		setTheme(!theme);
		saveThemeLocalStorage(!theme);
	};

	return (
		<ThemeProvider theme={theme ? dark : light}>
			<Global />
			<Container>
				<Header
					type={Boolean(theme)}
					toggleTheme={toggleTheme}
				/>
				<MyRoutes />
				<ListMenu
					type={Boolean(theme)}
					toggleTheme={toggleTheme}
				/>
			</Container>
		</ThemeProvider>
	);
}
