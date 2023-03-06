import React, {
	useState,
	useMemo,
} from 'react';
import {ThemeProvider} from 'styled-components';
import Container from './style/app';
import Global from './style/global';
import Header from './partner/header';
import MyRoutes from './routes';
import dark from './style/theme/dark';
import light from './style/theme/light';
import ThemeContext from './context/theme/Context';

export default function App() {
	const [theme, setTheme] = useState(localStorage.getItem('dark') === 'true' || false);
	const saveThemeLocalStorage = theme => {
		localStorage.setItem('dark', JSON.stringify(theme));
	};

	const toggleTheme = () => {
		setTheme(!theme);
		saveThemeLocalStorage(!theme);
	};

	const type = Boolean(theme);
	const value = useMemo(() => ({
		toggleTheme,
		type,
	}), [toggleTheme, type]);
	return (
		<ThemeContext.Provider value={ value }>
			<ThemeProvider theme={type ? dark : light}>
				<Global />
				<Container data-testid='main-home'>
					<Header/>
					<MyRoutes />
				</Container>
			</ThemeProvider>
		</ThemeContext.Provider>
	);
}
