import React from 'react'
import { NavLink } from 'react-router-dom'
import { pages } from '../pages'

const Navigation = () => {
  return (
    <nav className='nav'>
      {pages.map((page) =>
        <NavLink
          key={page.name}
          to={page.path}
          className={({ isActive }) => isActive ? "link link--active" : "link"}
        >
          {page.name}
        </NavLink>
      )}
    </nav>
  )
}

export default Navigation