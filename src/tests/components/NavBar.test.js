import React from 'react';
import {screen} from '@testing-library/react';
import renderWithRouter from '../../renderWithRouter';
import userEvent from '@testing-library/user-event';
import App from '../../App';

describe('test do component NavBar', () => {
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
