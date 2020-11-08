import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { filterPokemonsAC } from '../../../Redux/actions'
import { firstToUp } from '../../../utils/utils'
import './ToggleMenu.scss'

const ToggleMenu = ({ filterPokemons, filter, click }) => {
  useEffect(() => {
    filter('')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const filterSlots = filterPokemons.map((elem) => {
    return (
      <NavLink onClick={click} key={elem.name} className="link" to={elem.name}>
        <div className="item">
          <div className="item-block">
            <img src={elem.sprites.front_shiny} alt={elem.name} />
            <span>{firstToUp(elem.name)}</span>
          </div>
        </div>
      </NavLink>
    )
  })

  const onChangeHandler = (event) => {
    filter(event.target.value)
  }

  return (
    <div className="toggleMenu">
      <div className="toggleMenu-main">
        <div className="toggleMenu-main-search">
          <span>Меню навигации</span>
          <input onChange={onChangeHandler} className="toggleMenu-main-input" type="text" />
        </div>
        <div className="toggleMenu-elements">
          {filterSlots}
        </div>
      </div>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    filterPokemons: state.mainPageData.filterPokemons,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    filter: (str) => dispatch(filterPokemonsAC(str)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ToggleMenu)
