import React from 'react'
import { firstToUp } from '../../utils/utils'
import './PokemonPage.scss'

const PokemonPage = ({ pokemon }) => {
  console.log(pokemon)
  const abilities = pokemon.abilities.map((elem) => {
    return <span key={elem.ability.name}>Способность: {elem.ability.name}</span>
  })
  const stats = pokemon.stats.map((elem) => {
    console.log(elem.base_stat)
    console.log(elem.stat.name)
    return (
      <span key={elem.stat.name}>{elem.stat.name}: {elem.base_stat}</span>
    )
  })
  const types = pokemon.types.map((elem) => {
    return <span key={elem.type.name}>Тип: {elem.type.name}</span>
  })
  return (
    <div className="pokemonPage">
      <div className="pokemonPage-main">
        <div className="pokemonPage-main-pokemonImg">
          <img src={pokemon.sprites.front_shiny} alt="" />
          <span className="name">{firstToUp(pokemon.name)}</span>
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
        {/* 
        <span>{pokemon.id}</span>
        <span>{pokemon.order}</span>
         */}
      </div>
    </div>
  )
}

export default PokemonPage
