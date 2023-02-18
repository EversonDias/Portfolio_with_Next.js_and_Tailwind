import React, {useState} from 'react';
import {ThemeProvider} from 'styled-components';
import Container from './style/app';
import Global from './style/global';
import Header from './partner/header';
import MyRoutes from './routes';
import dark from './style/theme/dark';
import light from './style/theme/light';

export default function App() {
	const [theme, setTheme] = useState(localStorage.getItem('theme') === 'true' || false);
	const saveThemeLocalStorage = theme => {
		localStorage.setItem('theme', JSON.stringify(theme));
	};

	const toggleTheme = () => {
		if (theme) {
			setTheme(!theme);
			saveThemeLocalStorage(!theme);
		} else {
			setTheme(!theme);
			saveThemeLocalStorage(!theme);
		}
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
			</Container>
		</ThemeProvider>
	);
}
