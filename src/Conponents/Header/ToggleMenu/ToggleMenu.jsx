import React from 'react'
import './ToggleMenu.scss'

const ToggleMenu = ({ pokemons }) => {
  const slots = pokemons.map((elem) => {
    return (
      <div className="item" key={elem.name}>
        <div className="item-block">
          <img src={elem.sprites.front_shiny} alt={elem.name} />
          <span>{elem.name}</span>
        </div>
      </div>
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
