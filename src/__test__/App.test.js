import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';

test('MyHeader', () => {
  const { container } = render(<App />)
  const myHeaders=container.querySelector('.MyHeader')
  expect(myHeaders).not.toBeNull();
});

test('MyContent', () => {
  const { container } = render(<App />)
  const myContent=container.querySelector('.MyContent')
  expect(myContent).not.toBeNull();
});

test('MyFooter', () => {
  const { container } = render(<App />)
  const myFooter=container.querySelector('.MyFooter')
  expect(myFooter).not.toBeNull();
});
