import React from 'react';
import { render } from '@testing-library/react';
import Footer from '../footer';

test('baseLine', () => {
    const { container } = render(<Footer />)
    const myBox = container.querySelector('.myBox')
    expect(myBox.length).not.toBe(0);
});

describe('content test', function () {
    it('text1', () => {
        const { container } = render(<Footer />)
        expect(container).toBeInTheDocument('Made with ♥ inmelbourne.')
    });

    it('text2', () => {
        const { container } = render(<Footer />)
        expect(container).toBeInTheDocument('© 2016 Broccoli & Co. All rights reserved')
    });
});