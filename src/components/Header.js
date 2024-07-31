import React from 'react'; // Esta línea debe estar solo una vez
import { Link } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => {
  return (
    <header>
      <div className="left">
        <h1>FARMACIA AMIGO</h1>
      </div>
      <nav className="right">
        <Link to="/">LOGIN</Link>
        <Link to="/doctors">MEDICOS</Link>
        <button>CAMBIAR MODO</button>
      </nav>
    </header>
  );
};

export default Header;
