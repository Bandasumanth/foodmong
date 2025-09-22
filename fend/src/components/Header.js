import { useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../context/AuthContext';
import './Header.css';

const Header = ({ cartItemCount }) => {
  const { isAuth, logout } = useContext(AuthContext);

  return (
    <header className="header">
      <Link to="/" className="logo">Food Moong</Link>
      <nav className="nav-links">
        {isAuth ? (
          <>
            <Link to="/">Home</Link>
            <Link to="/services">Services</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/help">Help</Link>
            <Link to="/About">About</Link>
            <Link to="/cart">Cart ({cartItemCount})</Link>
            <button className="logout-btn" onClick={logout}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;