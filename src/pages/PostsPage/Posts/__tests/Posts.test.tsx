import React from 'react'
import { Provider } from 'react-redux'
import { render, screen } from '@testing-library/react'

import { store } from '../../../../redux'
import { testData } from './mockData'
import Index from '../index'

// describe('<Todos/> UI testing', () => {
//   it(`element with testId or 'test-id' should be in document`, () => {
//     screen.debug()
//     render(
//       <Provider store={store}>
//         <Index testData={testData} />,
//       </Provider>,
//     )
//     const element = screen.getByTestId(testData.testId)
//     expect(element).toBeInTheDocument()
//     screen.debug()
//   })
//   it(`h1 text content should be 'mockName' or 'Тестовое название статьи'`, () => {
//     screen.debug()
//     render(
//       <Provider store={store}>
//         <Index testData={testData} />
//       </Provider>,
//     )
//     const header = screen.getByTestId(testData.testId)
//     expect(header).toHaveTextContent(testData.mockName)
//     screen.debug()
//   })
// })
