/* eslint-disable no-undef */
import React from 'react';
import {screen} from '@testing-library/react';
import renderWithRouter from '../utils/renderWithRouter';
import userEvent from '@testing-library/user-event';
import App from '../../App';

describe('test do component NavBar', () => {
	const getBackground = () => {
		const homePage = screen.getByTestId('main-home');
		const style = getComputedStyle(homePage);
		return style;
	};

	it('o tema deve ser iniciado light', () => {
		renderWithRouter(<App/>);
		const style = getBackground();
		expect(style.backgroundColor).toBe('rgb(204, 204, 204)');
	});

	it('o tema deve mudar para dark ao clicar no toggle', () => {
		renderWithRouter(<App/>);
		const toggle = screen.getByTestId('toggle-theme');
		userEvent.click(toggle);
		const style = getBackground();
		expect(style.backgroundColor).toBe('rgb(62, 62, 62)');
	});

	it('O link projetos tem que direcionar para a rota /projects', () => {
		const {history} = renderWithRouter(<App />);
		const getTextProjects = screen.getByText('Projetos');
		userEvent.click(getTextProjects);
		const {location: {pathname}} = history;
		expect(pathname).toBe('/projects');
	});

	it('O link Sobre deve direcionar para a rota /about', () => {
		const {history} = renderWithRouter(<App />);
		const getTextSobre = screen.getByText('Sobre');
		userEvent.click(getTextSobre);
		const {location: {pathname}} = history;
		expect(pathname).toBe('/about');
	});
});
