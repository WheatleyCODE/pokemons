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
    fetchPokemons()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  console.log(pokemonsData)
  const routes = pokemonsData.map((elem) => {
    return <Route key={elem.name} path={`/${elem.name}`} render={() => <PokemonPage pokemon={elem} />} />
  })
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
    fetchPokemons: () => dispatch(fetchPokemonsAC()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)
