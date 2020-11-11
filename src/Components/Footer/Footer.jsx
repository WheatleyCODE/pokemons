import React from 'react'
import { NavLink } from 'react-router-dom'
import './Footer.scss'

const Footer = () => (
  <div className="footer">
    <div className="footer-panel">
      <div>
        <NavLink className="logo-link" to="favorite">
          <span className="footer-panel-text"> <i className="fa fa-heart-o" aria-hidden="true" />Какой ваш любимый?</span>
        </NavLink>
      </div>
      <div>
        <span className="footer-panel-text"><i className="fa fa-star-o" aria-hidden="true" />Что едят покемоны?</span>
      </div>
    </div>
  </div>
)

export default Footer
