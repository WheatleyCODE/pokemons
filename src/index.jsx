import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import Main from './Conponents/Main/Main'
import store from './Redux/store'
import './index.scss'

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <Main />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root'),
)
