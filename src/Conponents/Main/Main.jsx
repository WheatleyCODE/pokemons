import React, { useEffect } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import MainPage from '../MainPage/MainPage'
import PokemonPage from '../PokemonPage/PokemonPage'

import './Main.scss'
import { fetchPokemonsAC } from '../../Redux/actions'

const Main = ({ pokemonsData, fetchPokemons }) => {
  useEffect(() => {
    fetchPokemons(30, 0)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  const routes = pokemonsData.map((elem) => (
    <Route key={elem.name} path={`/${elem.name}`} render={() => <PokemonPage pokemon={elem} />} />
  ))
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route path="/pokemon" component={PokemonPage} />
        {routes}
        <Redirect to="/" />
      </Switch>
      <Footer />
    </div>
  )
}

function mapStateToProps(state) {
  return {
    pokemonsData: state.mainPageData.pokemons,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchPokemons: (limit, offset) => dispatch(fetchPokemonsAC(limit, offset)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)
