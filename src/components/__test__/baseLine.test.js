import React from 'react';
import { render } from '@testing-library/react';
import BaseLine from '../baseLine';

test('baseLine', () => {
  const { container } = render(<BaseLine />)
  const myBaseLine=container.querySelector('.baseLine')
  expect(myBaseLine.length).not.toBe(0);
});
