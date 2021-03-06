import React, { useEffect } from 'react'
import { Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchPokemonsAC } from '../../Redux/actions'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import MainPage from '../MainPage/MainPage'
import PokemonPage from '../PokemonPage/PokemonPage'
import FavoritePage from '../FavoritePage/FavoritePage'
import './Main.scss'

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
        <Route path="/favorite" render={() => <FavoritePage pokemons={pokemonsData} />} />
        {routes}
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
