import React from 'react'
import { NavLink } from 'react-router-dom'
import './PokemonCard.scss'

const PokemonCard = ({ name }) => {
  return (
    <NavLink to={`${name}`}>
      <div className="pokemonCard">{name}</div>
    </NavLink>
  )
}
export default PokemonCard
