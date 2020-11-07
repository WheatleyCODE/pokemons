import React from 'react'
import { NavLink } from 'react-router-dom'
import { firstToUp } from '../../../utils/utils'
import './PokemonCard.scss'

const PokemonCard = ({ pokemon }) => {
  return (
    <NavLink className="link" to={`${pokemon.name}`}>
      <div className="pokemonCard">
        <div className="pokemonCard-main">
          <img src={pokemon.sprites.front_shiny} alt={pokemon.name} />
          <span>{firstToUp(pokemon.name)}</span>
        </div>
      </div>
    </NavLink>
  )
}
export default PokemonCard
