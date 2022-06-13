import React from 'react';
import { render, screen } from '@testing-library/react';

import { testData } from './mockData'
import ArticleItems from '../index';

describe('<ArticleItems/> UI testing', () => {
  it(`element with testId or 'test-id' should be in document`, () => {
    screen.debug()
    render(
      <ArticleItems testData={testData}/>,
    )
    const element = screen.getByTestId(testData.testId)
    expect(element).toBeInTheDocument()
    screen.debug()
  })
  it(`h1 text content should be 'mockName' or 'Тестовое название статьи'`, () => {
    screen.debug()
    render(
      <ArticleItems  testData={testData}/>,
    )
    const header = screen.getByTestId(testData.testId)
    expect(header).toHaveTextContent(testData.mockName)
    screen.debug()
  })
})
