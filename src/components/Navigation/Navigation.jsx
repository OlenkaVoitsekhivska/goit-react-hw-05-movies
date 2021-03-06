import { NavLink } from 'react-router-dom';
// import { useState } from 'react';
import s from './Navigation.module.css';

export default function Navigation() {
  return (
    <nav className={s.navigation}>
      <NavLink
        to="/"
        style={({ isActive }) => {
          return {
            display: 'block',
            margin: '0 20px 0',
            padding: '15px 0',
            color: isActive ? 'red' : 'black',
          };
        }}
      >
        Home
      </NavLink>
      <NavLink
        to="/movies"
        style={({ isActive }) => {
          return {
            padding: '15px 0',
            color: isActive ? 'red' : 'black',
          };
        }}
      >
        Movies
      </NavLink>
    </nav>
  );
}
