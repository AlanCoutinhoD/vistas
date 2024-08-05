import React, { useEffect, useState } from 'react';
import '../styles/Distribuidores.css'; 
import Header from '../components/Header'; 
import deleteImg from '../assets/delete.png';
import editImg from '../assets/edit.png';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const DistributorsPage = () => {
  const [distributors, setDistributors] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate(); // Hook para la navegación

 
  useEffect(() => {
    const fetchDistributors = async () => {
      try {
        const response = await fetch('http://100.25.174.92:3000/distribuidores/distribuidores');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setDistributors(data);
      } catch (error) {
        console.error('Error fetching distributors:', error);
      }
    };

    fetchDistributors();
  }, []);

  const handleSearch = async () => {
    try {
      const response = await fetch(`http://100.25.174.92:3000/distribuidores/search/${encodeURIComponent(searchTerm)}`, {
        method: 'GET',
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setDistributors(data);
    } catch (error) {
      console.error('Error searching distributors:', error);
    }
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: '¿Estás seguro?',
      text: "Esta acción eliminará el distribuidor de la base de datos.",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#28a745',
      cancelButtonColor: '#dc3545',
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar'
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const response = await fetch(`http://100.25.174.92:3000/distribuidores/distribuidores/${id}`, {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json',
            },
          });

          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }

          
          setDistributors(distributors.filter(distributor => distributor.id !== id));

          
          Swal.fire(
            'Eliminado',
            'El distribuidor ha sido eliminado.',
            'success'
          );
        } catch (error) {
         
          Swal.fire(
            'Error',
            `Hubo un problema al intentar eliminar el distribuidor: ${error.message}`,
            'error'
          );
        }
      }
    });
  };

 
  const handleEdit = (id) => {
    navigate(`/ActualizarDistribuidor/${id}`); // Navega a la página de edición con el ID del distribuidor
  };

  return (
    <div className="distributors-page">
      <Header />
      <div className="distributors-container">
        <center>
          <h1>DISTRIBUIDORES</h1>
          <p>LISTA DE DISTRIBUIDORES</p>
        </center>
        <button className="new-button">NUEVO</button>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Escribe para buscar..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button onClick={handleSearch}>Buscar</button>
        </div>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre de la Empresa</th>
              <th>Nombre del Contacto</th>
              <th>Teléfono</th>
              <th>Email</th>
              <th>Dirección</th>
              <th>Ciudad</th>
              <th>Estado</th>
              <th>País</th>
              <th>Código Postal</th>
              <th>Fecha de Registro</th>
              <th>Estado Activo</th>
              <th>Borrar</th>
              <th>Editar</th>
            </tr>
          </thead>
          <tbody>
            {distributors.map(distributor => (
              <tr key={distributor.id}>
                <td>{distributor.id}</td>
                <td>{distributor.nombre_empresa}</td>
                <td>{distributor.contacto_nombre}</td>
                <td>{distributor.telefono}</td>
                <td>{distributor.email}</td>
                <td>{distributor.direccion}</td>
                <td>{distributor.ciudad}</td>
                <td>{distributor.estado}</td>
                <td>{distributor.pais}</td>
                <td>{distributor.codigo_postal}</td>
                <td>{new Date(distributor.fecha_registro).toLocaleDateString()}</td>
                <td>{distributor.estado_activo ? 'Activo' : 'Inactivo'}</td>
                <td className="actions">
                  <img 
                    src={deleteImg} 
                    alt="Eliminar" 
                    onClick={() => handleDelete(distributor.id)} 
                  />
                </td>
                <td className="actions">
                  <img 
                    src={editImg} 
                    alt="Editar" 
                    onClick={() => handleEdit(distributor.id)} 
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DistributorsPage;
