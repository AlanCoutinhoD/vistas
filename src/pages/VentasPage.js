import React from 'react';
import '../styles/Ventas.css'; // Asegúrate de que la ruta sea correcta
import Header from '../components/Header';
import editImg from '../assets/edit.png';
import deleteImg from '../assets/delete.png';

const VentasPage = () => {
  return (
    <div>
      <Header />
      <main>
        <h2>Ventas</h2>
        <h3>Historial de Ventas</h3>
        <div className="actions">
          <button className="new">Nuevo</button>
          <button className="report">Generar Reporte</button>
          <div className="search">
            <input type="text" placeholder="Escribe para buscar..." />
            <button>Buscar</button>
          </div>
        </div>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Fecha</th>
              <th>Precio</th>
              <th>Cantidad</th>
              <th>Borrar</th>
              <th>Editar</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Vitaminas</td>
              <td>12/01/2024</td>
              <td>160.00</td>
              <td>24</td>
              <td><img src={deleteImg} alt="Borrar" /></td>
              <td><img src={editImg} alt="Editar" /></td>
            </tr>
            <tr>
              <td>2</td>
              <td>Minerales</td>
              <td>13/01/2024</td>
              <td>24.50</td>
              <td>30</td>
              <td><img src={deleteImg} alt="Borrar" /></td>
              <td><img src={editImg} alt="Editar" /></td>
            </tr>
            {/* Agrega más filas según sea necesario */}
          </tbody>
        </table>
      </main>
    </div>
  );
};

export default VentasPage;
