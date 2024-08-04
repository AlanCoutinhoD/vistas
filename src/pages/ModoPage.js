import React from 'react';
import '../styles/Modo.css'; // Asegúrate de que la ruta sea correcta

const ModeSelectionPage = () => {
  return (
    <div>
      
        <button className="logout-button">CERRAR SESIÓN</button>
   
      <main>
        <h1>SELECCIONE EL MODO</h1>
        <div className="mode-selection">
          <div className="mode-card">
            <h2>CONSULTORIO</h2>
            <button className="select-button">SELECCIONAR</button>
          </div>
          <div className="mode-card">
            <h2>FARMACIA</h2>
            <button className="select-button">SELECCIONAR</button>
          </div>
        </div>
      </main>
      
    </div>
  );
};

export default ModeSelectionPage;
