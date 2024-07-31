import React from 'react';
import '../styles/Inventario.css'; // Asegúrate de que la ruta sea correcta

const AgregarInventario = () => {
  return (
    <div>
      <button className="back-button">REGRESAR</button>
      <div className="inventory-container">
        <h1>AGREGAR INVENTARIO</h1>
        <form action="#" method="post">
          <input type="text" name="nombre" placeholder="Nombre" required />
          <input type="number" name="cantidad" placeholder="Cantidad" required />
          <input type="number" name="precio" placeholder="Precio" required />
          <textarea name="descripcion" placeholder="Descripción" required></textarea>
          <button type="submit">AGREGAR</button>
        </form>
      </div>
    </div>
  );
};

export default AgregarInventario;
