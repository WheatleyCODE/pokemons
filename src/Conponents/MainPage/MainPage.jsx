import React from 'react'
import { connect } from 'react-redux'
import PokemonCard from './PokemonCard/PokemonCard'
import './MainPage.scss'
import Loader from '../Loader/Loader'

const MainPage = ({ pokemonsData }) => {
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

export default connect(mapStateToProps, null)(MainPage)
