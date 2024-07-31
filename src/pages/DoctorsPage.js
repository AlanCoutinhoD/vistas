import React from 'react';
import '../styles/Doctors.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import deleteImg from '../assets/delete.png';
import editImg from '../assets/edit.png';

const DoctorsPage = () => {
  return (
    <div className="doctors-page">
      <Header />
      <div className="doctors-container">
        <center>
          <h1>MEDICOS</h1>
          <p>LISTA DE MEDICOS</p>
        </center>
        <button className="new-button">NUEVO</button>
        <div className="search-bar">
          <input type="text" placeholder="Escribe para buscar..." />
          <button>Buscar</button>
        </div>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>NOMBRE</th>
              <th>TELEFONO</th>
              <th>CORREO</th>
              <th>BORRAR</th>
              <th>EDITAR</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>JUAN</td>
              <td>9612135124</td>
              <td>juan@hotmail.com</td>
              <td className="actions"><img src={deleteImg} alt="Eliminar" /></td>
              <td className="actions"><img src={editImg} alt="Editar" /></td>
            </tr>
            <tr>
              <td>2</td>
              <td>MARIA</td>
              <td>9612135125</td>
              <td>maria@hotmail.com</td>
              <td className="actions"><img src={deleteImg} alt="Eliminar" /></td>
              <td className="actions"><img src={editImg} alt="Editar" /></td>
            </tr>
          </tbody>
        </table>
      </div>
      <Footer />
    </div>
  );
};

export default DoctorsPage;
