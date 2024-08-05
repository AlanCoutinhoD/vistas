import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Modo.css'; 

const ModeSelectionPage = () => {
  const navigate = useNavigate();

 
  const handleConsultorioClick = () => {
    navigate('/Medicos'); 
  };

  const handleFarmaciaClick = () => {
    navigate('/InventarioM'); 
  };

  const handleLogoutClick = () => {
    navigate('/');
  };

  return (
    <div>
      <button className="logout-button" onClick={handleLogoutClick}>CERRAR SESIÓN</button>
      <main>
        <h1>SELECCIONE EL MODO</h1>
        <div className="mode-selection">
          <div className="mode-card">
            <h2>CONSULTORIO</h2>
            <button className="select-button" onClick={handleConsultorioClick}>SELECCIONAR</button>
          </div>
          <div className="mode-card">
            <h2>FARMACIA</h2>
            <button className="select-button" onClick={handleFarmaciaClick}>SELECCIONAR</button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ModeSelectionPage;
