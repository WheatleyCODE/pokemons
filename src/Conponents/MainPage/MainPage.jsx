import React from 'react'
import { connect } from 'react-redux'
import PokemonCard from './PokemonCard/PokemonCard'
import './MainPage.scss'

const MainPage = ({ pokemonsData }) => {
  const pokemons = pokemonsData.map((elem) => {
    return <PokemonCard key={elem.name} name={elem.name} />
  })
  console.log(pokemons)
  return (
    <div className="mainPage">
      <div className="mainPage-pokemons">
        {pokemons}
      </div>
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
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(MainPage)
