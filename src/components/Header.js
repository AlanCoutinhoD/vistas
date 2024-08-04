import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Header.css'; // Asegúrate de crear este archivo CSS

const Header = () => {
  const navigate = useNavigate(); // Hook para redirigir

  const handleLogout = () => {
    // Aquí puedes manejar el cierre de sesión
    // Por ejemplo, eliminar el token de autenticación
    // y redirigir al usuario a la página de inicio de sesión
    navigate('/login');
  };

  return (
    <header className="header">
      <div className="header-title">
        <h1>FARMACIA AMIGO</h1>
      </div>
      <nav className="header-nav">
        <a href="/ventas">VENTAS</a>
        <a href="/InventarioM">INVENTARIO</a>
        <a href="/distribuidores">DISTRIBUIDORES</a>
        <a href="/modo">CAMBIAR DE MODO</a>
        <button className="logout-button" onClick={handleLogout}>Cerrar Sesión</button>
      </nav>
    </header>
  );
};

export default Header;
