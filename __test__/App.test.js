import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';
import App from '../client/App.jsx';
import { renderWithProviders } from '../testing-utils/renderWithProvider.js';

describe('App render correctly', () => {
  test('RediSee text under logo successfully render', () => {
    renderWithProviders(<App />);
    const logoElement = screen.getByText('RediSee');
    expect(logoElement).toBeInTheDocument();
  });
});
