import React from 'react'
import './Header.scss'

const Header = () => {
  return (
    <div className="header">
      <div className="header-panel">
        <button className="header-panel-nemu" type="button">
          <i className="fa fa-bars" aria-hidden="true" />
        </button>
        <span className="header-panel-logo">Pokemons wrap</span>
      </div>
    </div>
  )
}

export default Header
