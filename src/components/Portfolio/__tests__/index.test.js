// __tests__/Portfolio.test.js
import React from 'react'
import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Portfolio from '..'
const project = { name: "front-end", description: "my front-end projects" };


afterEach(cleanup)

describe('Portfolio component', () => {

  it('renders', () => {
    render(<Portfolio currentCategory={project} />);
  });

  it('matches snapshot', () => {
    const { asFragment } = render(<Portfolio currentCategory={project} />)
    expect(asFragment()).toMatchSnapshot()
  })
});

it('displays text', () => {
  const { getByTestId } = render(<Portfolio currentCategory={project} />)
  expect(getByTestId('h1tag')).toHaveTextContent('Front End')
})