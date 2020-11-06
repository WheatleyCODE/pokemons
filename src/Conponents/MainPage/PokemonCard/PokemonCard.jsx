import React from 'react'
import './PokemonCard.scss'

const PokemonCard = ({ name }) => {
  return (
    <div className="pokemonCard">{name}</div>
  )
}
export default PokemonCard
