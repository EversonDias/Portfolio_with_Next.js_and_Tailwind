import React from 'react';
import {render, screen} from '@testing-library/react';
// import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('tests do component App', () => {
  it('o testo hello word! deve aparecer na tela', () => {
    // renderWithRouter(<App />);
    render(<App />);
    const getText = screen.getByText('hello word!');
    expect(getText).toBeInTheDocument();
  });
});
