import React from 'react';
import { render } from '@testing-library/react';
import RequestFormModal from '../requestFormModal';

test('requestFormModal', () => {
  const requestFormModal = render(<RequestFormModal />);
  expect(requestFormModal).toMatchSnapshot();
});
  