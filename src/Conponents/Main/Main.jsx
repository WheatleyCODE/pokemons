import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import MainPage from '../MainPage/MainPage'

import './Main.scss'

const Main = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/" component={MainPage} />
        <Redirect to="/" />
      </Switch>
      <Footer />
    </div>
  )
}

export default Main
