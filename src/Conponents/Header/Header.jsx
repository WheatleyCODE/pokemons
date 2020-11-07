import React, { useState } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import ToggleMenu from './ToggleMenu/ToggleMenu'
import './Header.scss'

const Header = ({ pokemonsData }) => {
  const [isOpen, setIsOpen] = useState(false)

  const onClickHandler = () => {
    setIsOpen((prev) => !prev)
  }

  let styles = {}
  isOpen ? styles = { marginLeft: '310px', color: 'white' } : styles = {}

  return (
    <div className="header">
      <div className="header-panel">
        <button style={styles} onClick={onClickHandler} className="header-panel-nemuLeft" type="button">
          {isOpen ? <i className="fa fa-times" aria-hidden="true" /> : <i className="fa fa-bars" aria-hidden="true" />}
        </button>
        <NavLink className="logo-link" to="/">
          <span className="header-panel-logo"> <img className="logo" src="https://i1.sndcdn.com/avatars-000146217229-eb1v1y-t500x500.jpg" alt="ball" /><span className="logo-text">Pokemons wrap</span></span>
        </NavLink>
        <button className="header-panel-nemuRight" type="button">
          <NavLink className="logo-link" to="favorite">
            <i className="fa fa-heart-o" aria-hidden="true" />
          </NavLink>
        </button>
      </div>
      {isOpen ? <div><ToggleMenu click={onClickHandler} pokemons={pokemonsData.pokemons} /><div onClick={onClickHandler} className="shadow"></div></div> : null}
    </div>
  )
}

function mapStateToProps(state) {
  return {
    pokemonsData: state.mainPageData,
  }
}

export default connect(mapStateToProps, null)(Header)
