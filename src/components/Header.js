import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Header.css'; 

const Header = () => {
  const navigate = useNavigate(); 

  const handleLogout = () => {
    
    navigate('/');
  };

  return (
    <header className="header">
      <div className="header-title">
        <h1>FARMACIA AMIGO</h1>
      </div>
      <nav className="header-nav">
        <a href="/ventas">VENTAS</a>
        <a href="/InventarioM">INVENTARIO</a>
        {/* <a href="/distribuidores">DISTRIBUIDORES</a> */}
        <a href="/modo">CAMBIAR DE MODO</a>
        <button className="logout-button" onClick={handleLogout}>Cerrar Sesión</button>
      </nav>
    </header>
  );
};

export default Header;
