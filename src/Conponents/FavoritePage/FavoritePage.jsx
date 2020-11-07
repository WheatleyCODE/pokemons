import React from 'react'
import { NavLink } from 'react-router-dom'
import './FavoritePage.scss'

const FavoritePage = () => {
  return (
    <div className="favoritePage">
      <div className="favoritePage-noFavoriteBlock">
        <span>У вас нет любимых покемонов <i className="fa fa-frown-o" aria-hidden="true" /></span>
        <span><NavLink to="/">Добавить</NavLink></span>
      </div>
    </div>
  )
}

export default FavoritePage
