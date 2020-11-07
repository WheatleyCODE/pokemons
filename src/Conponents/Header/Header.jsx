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
  isOpen ? styles = { marginLeft: '310px' } : styles = {}

  return (
    <div className="header">
      <div className="header-panel">
        <button style={styles} onClick={onClickHandler} className="header-panel-nemu" type="button">
          {isOpen ? <i className="fa fa-times" aria-hidden="true" /> : <i className="fa fa-bars" aria-hidden="true" />}
        </button>
        <NavLink className="logo-link" to="/">
          <span className="header-panel-logo"> <img className="logo" src="https://i1.sndcdn.com/avatars-000146217229-eb1v1y-t500x500.jpg" alt="ball" /> Pokemons wrap</span>
        </NavLink>
      </div>
      {isOpen ? <div><ToggleMenu pokemons={pokemonsData.pokemons} /><div onClick={onClickHandler} className="shadow"></div></div> : null}
    </div>
  )
}

function mapStateToProps(state) {
  return {
    pokemonsData: state.mainPageData,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    // fetchPokemons: () => dispatch(fetchPokemonsAC()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
