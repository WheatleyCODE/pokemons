import React from 'react'
import { NavLink } from 'react-router-dom'
import PokemonCard from '../MainPage/PokemonCard/PokemonCard'
import './FavoritePage.scss'

const FavoritePage = ({ pokemons }) => {
  const favoritePokemons = []
  pokemons.forEach((elem) => {
    if (elem.isFavorite) {
      favoritePokemons.push(<PokemonCard key={elem.name} pokemon={elem} />)
    }
  })

  const noFavoriteBlock = (
    <div className="favoritePage-noFavoriteBlock">
      <span>У вас нет избранных покемонов <i className="fa fa-frown-o" aria-hidden="true" /></span>
      <span><NavLink to="/">Добавить</NavLink></span>
    </div>
  )

  return (
    <div className="favoritePage">
      <div className="favoritePage-pokemons">
        {favoritePokemons.length > 0 ? <div className="favoritePage-pokemons-title">Ваши покемоны</div> : null}
        {favoritePokemons.length > 0 ? favoritePokemons : noFavoriteBlock}
      </div>
    </div>
  )
}

export default FavoritePage
