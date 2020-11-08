import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { setFavoriteAC } from '../../../Redux/actions'
import { firstToUp } from '../../../utils/utils'
import './PokemonCard.scss'

const PokemonCard = ({ pokemon, setFavorite }) => {
  const onClickHandler = (id) => {
    setFavorite(id)
  }

  return (
    <div className="pokemonCard">
      {pokemon.isFavorite 
        ? <span onClick={() => {onClickHandler(pokemon.id)}} className="pokemonCard-favoriteIcon favoriteIcon"><i className="fa fa-heart" aria-hidden="true" /></span>
        : <span onClick={() => {onClickHandler(pokemon.id)}} className="pokemonCard-favoriteIcon"><i className="fa fa-heart-o" aria-hidden="true" /></span>}
      <NavLink className="link" to={`${pokemon.name}`}>
        <div className="pokemonCard-main">
          <img src={pokemon.sprites.front_shiny} alt={pokemon.name} />
          <span>{firstToUp(pokemon.name)}</span>
        </div>
      </NavLink>
    </div>
  )
}

function mapDispatchToProps(dispatch) {
  return {
    setFavorite: (id) => dispatch(setFavoriteAC(id)),
  }
}

export default connect(null, mapDispatchToProps)(PokemonCard)
