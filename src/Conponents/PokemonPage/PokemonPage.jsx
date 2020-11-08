import React from 'react'
import { connect } from 'react-redux'
import { firstToUp } from '../../utils/utils'
import { setFavoriteAC } from '../../Redux/actions'
import './PokemonPage.scss'

const PokemonPage = ({ pokemon, setFavorite }) => {
  const onClickHandler = (id) => {
    setFavorite(id)
  }

  const abilities = pokemon.abilities.map((elem) => (
    <span key={elem.ability.name}>Способность: {elem.ability.name}</span>
  ))
  const stats = pokemon.stats.map((elem) => (
    <span key={elem.stat.name}>{elem.stat.name}: {elem.base_stat}</span>
  ))
  const types = pokemon.types.map((elem) => (
    <span key={elem.type.name}>Тип: {elem.type.name}</span>
  ))

  return (
    <div className="pokemonPage">
      <div className="pokemonPage-main">
        <div className="pokemonPage-main-pokemonImg">
          <img src={pokemon.sprites.front_shiny} alt="" />
          <span className="name">{firstToUp(pokemon.name)}</span>
          {pokemon.isFavorite 
            ? <span onClick={() => {onClickHandler(pokemon.id)}} className="pokemonPage-main-pokemonImg-favoriteIcon favoriteIcon">Favorite <i className="fa fa-heart" aria-hidden="true" /></span> 
            : <span onClick={() => {onClickHandler(pokemon.id)}} className="pokemonPage-main-pokemonImg-favoriteIcon">Favorite <i className="fa fa-heart-o" aria-hidden="true" /></span>}
        </div>
        <div className="pokemonPage-main-stats">
          <span className="title">Характеристики</span>
          {stats}
          <span>exp: {pokemon.base_experience}</span>
          <span>height: {pokemon.height}</span>
          <span>weight: {pokemon.weight}</span>
        </div>
        <div className="pokemonPage-main-spels">
          <span className="title">Способности</span>
          {abilities}
          <span className="title types">Типы</span>
          {types}
        </div>
      </div>
    </div>
  )
}

function mapDispatchToProps(dispatch) {
  return {
    setFavorite: (id) => dispatch(setFavoriteAC(id)),
  }
}

export default connect(null, mapDispatchToProps)(PokemonPage)
