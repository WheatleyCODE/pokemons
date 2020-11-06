import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import PokemonCard from './PokemonCard/PokemonCard'
import './MainPage.scss'
import { fetchPokemonsAC } from '../../Redux/actions'
import Loader from '../Loader/Loader'

const MainPage = ({ pokemonsData, fetchPokemons }) => {
  useEffect(() => {
    fetchPokemons()
  }, [])

  const pokemons = pokemonsData.pokemons.map((elem) => {
    return <PokemonCard key={elem.name} pokemon={elem} />
  })

  return (
    <div className="mainPage">
      <div className="mainPage-pokemons">
        {pokemons}
        {pokemonsData.loading ? <Loader /> : null}
      </div>
      <div className="mainPage-morePokemons">
        <button type="button">Мне нужно больше покемонов!</button>
      </div>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    pokemonsData: state.mainPageData,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchPokemons: () => dispatch(fetchPokemonsAC()),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(MainPage)
