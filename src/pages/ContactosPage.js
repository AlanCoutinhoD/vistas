import '../styles/Contactos.css';
import React from 'react';
import Header from '../components/Header';
import deleteIcon from '../assets/delete.png';
import editIcon from '../assets/edit.png';



const MedicosPage = () => (
    <>
        <Header />
        <div className="container">
            <h1>MEDICOS</h1>
            <p>LISTA DE MEDICOS</p>
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
                        <td className="actions">
                            <img src={deleteIcon} alt="Eliminar" />
                        </td>
                        <td className="actions">
                            <img src={editIcon} alt="Editar" />
                        </td>
                    </tr>
                    {/* Repite las filas según sea necesario */}
                </tbody>
            </table>
        </div>
    </>
);

export default MedicosPage;