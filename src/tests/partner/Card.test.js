/* eslint-disable no-undef */
import React from 'react';
import {screen, waitFor} from '@testing-library/react';
import renderWithRouter from '../utils/renderWithRouter';
import App from '../../App';
import {listOneItem} from '../../tests/utils/dataMock';

describe('test do component cardProject', () => {
	beforeEach(() => {
		global.fetch = () => Promise.resolve({
			json: () => Promise.resolve(listOneItem),
		});
	});
	it('o card renderiza uma imagem', async () => {
		renderWithRouter(<App/>, ['/projects']);
		await waitFor(() => {
			const img = screen.getByRole('img');
			expect(img).toBeInTheDocument();
		});
	});
	it('É renderizado um Titulo', async () => {
		renderWithRouter(<App />, ['/projects']);
		await waitFor(() => {
			const getText = screen.getByText('Projeto Test');
			expect(getText).toBeInTheDocument();
		});
	});
	it('os projetos com id marcado não devem se renderizado', async () => {
		renderWithRouter(<App />, ['/projects']);
		await waitFor(() => {
			const getText = screen.queryByText('ProjectId');
			expect(getText).not.toBeInTheDocument();
		});
	});
});
