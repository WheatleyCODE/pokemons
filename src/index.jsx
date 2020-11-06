import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import Main from './Conponents/Main/Main'
import store from './Redux/store'
import './index.scss'

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <React.StrictMode>
        <Main />
      </React.StrictMode>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
)
