import React, { useState } from 'react'
import ToggleMenu from './ToggleMenu/ToggleMenu'
import './Header.scss'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const onClickHandler = () => {
    setIsOpen((prev) => !prev)
  }

  let styles = {}
  isOpen ? styles = { marginLeft: '310px' } : styles = {}

  return (
    <div className="header">
      <div className="header-panel">
        <button style={styles} onClick={onClickHandler} className="header-panel-nemu" type="button">
          {isOpen ? <i className="fa fa-times" aria-hidden="true" /> : <i className="fa fa-bars" aria-hidden="true" />}
        </button>
        <span className="header-panel-logo">Pokemons wrap</span>
      </div>
      {isOpen ? <div><ToggleMenu /><div onClick={onClickHandler} className="shadow">12134</div></div> : null}
    </div>
  )
}

export default Header
