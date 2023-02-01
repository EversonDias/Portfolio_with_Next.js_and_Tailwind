import React from 'react';
import {screen} from '@testing-library/react';
import renderWithRouter from '../../renderWithRouter';
import userEvent from '@testing-library/user-event';
import App from '../../App';

describe('test do componente Header', () => {
  it('o logo deve direcionar para a rota /', () => {
    const {history} = renderWithRouter(
        <App />, ['/projects'],
    );
    const getLogoTest = screen.getByTestId('logo-test');
    userEvent.click(getLogoTest);
    const {location: {pathname}} = history;
    expect(pathname).toBe('/');
  });
});
