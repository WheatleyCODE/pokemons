import React from 'react'
import { connect } from 'react-redux'
import PokemonCard from './PokemonCard/PokemonCard'
import './MainPage.scss'
import Loader from '../Loader/Loader'
import { addOffsetAC, fetchPokemonsAC } from '../../Redux/actions'

const MainPage = ({ pokemonsData, fetchPokemons, addOffset }) => {
  const pokemons = pokemonsData.pokemons.map((elem) => (
    <PokemonCard key={elem.name} pokemon={elem} />
  ))

  const onClickHandler = () => {
    fetchPokemons(20, pokemonsData.offset)
    addOffset(20)
  }

  return (
    <div className="mainPage">
      <div className="mainPage-pokemons">
        {pokemons}
        {pokemonsData.loading ? <Loader /> : null}
      </div>
      <div className="mainPage-morePokemons">
        <button onClick={onClickHandler} type="button">Мне нужно больше покемонов!</button>
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
    fetchPokemons: (limit, offset) => dispatch(fetchPokemonsAC(limit, offset)),
    addOffset: (num) => dispatch(addOffsetAC(num)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainPage)
