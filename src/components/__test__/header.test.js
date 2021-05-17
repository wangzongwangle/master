import React from 'react';
import { render } from '@testing-library/react';
import Header from '../header';

test('header', () => {
  const { container } = render(<Header />)
  expect(container).toBeInTheDocument('BROCCOLI & CO.')
});
