import React from 'react'
import { NavLink } from 'react-router-dom'
import './ToggleMenu.scss'

const ToggleMenu = ({ pokemons }) => {
  const slots = pokemons.map((elem) => {
    return (
      <NavLink key={elem.name} className="link" to={elem.name}>
        <div className="item">
          <div className="item-block">
            <img src={elem.sprites.front_shiny} alt={elem.name} />
            <span>{elem.name}</span>
          </div>
        </div>
      </NavLink>
    )
  })

  return (
    <div className="toggleMenu">
      <div className="toggleMenu-main">
        <div className="toggleMenu-main-search">
          <span>Меню навигации</span>
          <input className="toggleMenu-main-input" type="text" />
        </div>
        <div className="toggleMenu-elements">
          {slots}
        </div>
      </div>
    </div>
  )
}
export default ToggleMenu
