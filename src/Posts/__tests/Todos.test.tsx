import React from 'react';
import { render, screen } from '@testing-library/react';

import { testData } from './mockData'
import Posts from '../Posts'


describe('<Todos/> UI testing', () => {
  it(`element with testId or 'test-id' should be in document`, () => {
    screen.debug()
    render(
      <Posts testData={testData}/>,
    )
    const element = screen.getByTestId(testData.testId)
    expect(element).toBeInTheDocument()
    screen.debug()
  })
  it(`h1 text content should be 'mockName' or 'Тестовое название статьи'`, () => {
    screen.debug()
    render(
      <Posts  testData={testData}/>,
    )
    const header = screen.getByTestId(testData.testId)
    expect(header).toHaveTextContent(testData.mockName)
    screen.debug()
  })
})
