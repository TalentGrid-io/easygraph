import React from 'react'
import { render } from 'react-dom'
import App from './App'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import 'react-graphql-syntax-highlighter/dist/style.css'
import 'bulma/css/bulma.css'

const client = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql',
  cache: new InMemoryCache()
})

render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
)
