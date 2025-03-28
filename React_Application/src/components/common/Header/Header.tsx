
import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
const Header:FC = () => {
    return (
<header className="Header">
<img src="https://reactjs.org/logo-og.png" alt="React Image" className="Logo" />
<NavLink  to="/" end style={({isActive}) => ({
  color: isActive ? "white" : "#b66b13"
 })}
 >
  <b>Home Page</b>
  </NavLink>
<NavLink  to="/posts" style={({isActive}) => ({
  color: isActive ? "white" : "#b66b13"
 })}
 >
  <b>Posts Page</b>
  </NavLink>
 <NavLink to="/about" style={({isActive}) => ({
  color: isActive ? "white" : "#b66b13"
 })}
 >
  <b>About Page</b>
  </NavLink>
</header>
    );
};

export default Header;


