import React from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { ApolloProvider } from '@apollo/client'
import { ToastContainer } from 'react-toastify'

import { client, store } from './app'

import App from './app/components/App'

import './index.sass'

const root = createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <Provider store={store}>
    <ApolloProvider client={client}>
      <App />
      <ToastContainer />
    </ApolloProvider>
  </Provider>,
)
