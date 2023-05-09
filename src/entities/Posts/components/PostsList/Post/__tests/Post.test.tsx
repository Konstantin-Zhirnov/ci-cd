import React from 'react'
import { Provider } from 'react-redux'
import { render, screen } from '@testing-library/react'

import { store } from '../../../../../../app'
import Post from '../index'
import { testData } from './mockData'

describe('<Post/> UI testing', () => {
  it(`element with 'test-id' should be in document`, () => {
    screen.debug()

    render(
      <Provider store={store}>
        <Post post={testData.mockPost} index={1} />,
      </Provider>,
    )
    const element = screen.getByTestId(testData.postId)
    expect(element).toBeInTheDocument()
    screen.debug()
  })

  it(`Element should be text 'test title'`, () => {
    screen.debug()
    render(
      <Provider store={store}>
        <Post post={testData.mockPost} index={1} />
      </Provider>,
    )
    const element = screen.getByTestId(testData.postId)
    expect(element).toHaveTextContent(testData.mockPost.title)
    screen.debug()
  })
})
