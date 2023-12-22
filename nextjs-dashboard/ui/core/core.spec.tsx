import React from 'react';
import { render } from '@testing-library/react';
import { BasicCore } from './core.composition.js';

it('renders with the correct text', () => {
  const { getByText } = render(<BasicCore />);
  const rendered = getByText('hello world!');
  expect(rendered).toBeTruthy();
});
