import { ApolloProvider } from '@apollo/client'
import { BrowserRouter } from 'react-router-dom'

import { Router } from '@/Router'

import { client } from '@/lib/apollo'

export const App = () => {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ApolloProvider>
  )
}