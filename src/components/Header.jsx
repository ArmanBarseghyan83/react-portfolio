import { NavLink } from 'react-router-dom';
import Navigation from './UI/Navigation';

export default function Header() {
  return (
    <Navigation
      links={[
        <NavLink key={1} className="nav-link text-light" to="/about">
          About Me 
        </NavLink>,
        <NavLink key={2} className="nav-link text-light" to="/portfolio">
          Portfolio
        </NavLink>,
        <NavLink key={2} className="nav-link text-light" to="/contact">
          Contact
        </NavLink>,
        <NavLink key={2} className="nav-link text-light" to="/resume">
          Resume
        </NavLink>,
      ]}
    />
  );
}
