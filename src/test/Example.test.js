import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
const Example = () => {
  return (
    <div>
      <h1>Hello, World!</h1>
    </div>
  );
};

describe('Example Component', () => {
  test('renders the correct heading', () => {
 
    render(<Example />);

    const headingElement = screen.getByText('Hello, World!');

    expect(headingElement).toBeInTheDocument();
  });
});