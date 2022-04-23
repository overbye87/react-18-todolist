import React from 'react'
import { NavLink } from 'react-router-dom'

const Navigation = () => {
  return (
    <nav className='nav'>
      <NavLink
        to=""
        className={({ isActive }) => isActive ? "link link--active" : "link"}
      >
        Home
      </NavLink>
      <NavLink
        to="/auth"
        className={({ isActive }) => isActive ? "link link--active" : "link"}
      >
        Auth
      </NavLink>
      <NavLink
        to="/matrix"
        className={({ isActive }) => isActive ? "link link--active" : "link"}
      >
        Matrix
      </NavLink>
      <NavLink
        to="/todo"
        className={({ isActive }) => isActive ? "link link--active" : "link"}
      >
        ToDo
      </NavLink>
    </nav>
  )
}

export default Navigation