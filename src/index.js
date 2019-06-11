import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { ApolloProvider } from 'react-apollo'
import ApolloClient from 'apollo-boost'

import 'bootstrap/dist/css/bootstrap.css'
import '@fortawesome/fontawesome-free/css/all.min.css'

import * as serviceWorker from './serviceWorker';
import './index.css'
import App from './App'

const client = new ApolloClient({
  uri: 'https://api-uswest.graphcms.com/v1/cjtcw3ydc3u2f01b95ofcpmee/master'
})

ReactDOM.render(
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </BrowserRouter>
  , document.getElementById('root'))


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
