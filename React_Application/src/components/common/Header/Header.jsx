
import { NavLink } from 'react-router-dom';
import './Header.css';
const Header = () => {
    return (
<header className="Header">
<img src="https://reactjs.org/logo-og.png" alt="React Image" className="Logo" />
<NavLink to="/" end >Home Page</NavLink>
<NavLink to="/posts"  >Posts</NavLink>
 <NavLink to="/about" style={({isActive}) => ({
  color: isActive ? "white" : "black"
 })}
 >
  <b>About Page</b>
  </NavLink>
</header>
    );
};

export default Header;


