import React, {useState} from 'react';
import {ThemeProvider} from 'styled-components';
import Container from './style/app';
import Global from './style/global';
import Header from './partner/header';
import MyRoutes from './routes';
import dark from './style/theme/dark';
import light from './style/theme/light';
import ThemeContext from './context/theme/Context';

export default function App() {
	const [theme, setTheme] = useState(localStorage.getItem('theme') === 'true' || false);
	const saveThemeLocalStorage = theme => {
		localStorage.setItem('theme', JSON.stringify(theme));
	};

	const toggleTheme = () => {
		setTheme(!theme);
		saveThemeLocalStorage(!theme);
	};

	return (
		<ThemeProvider theme={theme ? dark : light}>
			<ThemeContext.Provider value={{type: Boolean(theme), toggleTheme}} >
				<Global />
				<Container data-testid='main-home'>
					<Header/>
					<MyRoutes />
				</Container>
			</ThemeContext.Provider>
		</ThemeProvider>
	);
}
