import React from 'react';
import { cleanup, fireEvent, render } from '@testing-library/react';
import Carousel from '../components/Carousel/Carousel';

const mockImgs = ['/img/1.png', '/img/2.png', '/img/3.png'];

it('CheckboxWithLabel changes the text after click', () => {
  const { getByLabelText } = render(<Carousel images={mockImgs} />);

  expect(getByLabelText('Arrow left')).toBeInTheDocument;
  expect(getByLabelText('Arrow right')).toBeInTheDocument;
});
