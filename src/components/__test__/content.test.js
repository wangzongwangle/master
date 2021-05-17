import React from 'react';
import { render } from '@testing-library/react';
import Content from '../content';

describe('className test', function () {
    it('myBox', () => {
        const { container } = render(<Content />)
        const myContent = container.querySelector('.myBox')
        expect(myContent).not.toBeUndefined();
    });

    it('contentTitle', () => {
        const { container } = render(<Content />)
        const myContent = container.querySelector('.contentTitle')
        expect(myContent).not.toBeUndefined();
    });
});