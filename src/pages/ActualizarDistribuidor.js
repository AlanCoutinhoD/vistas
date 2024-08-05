import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/ActualizarDistribuidor.css';
import { useParams, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'; // Importa SweetAlert2

const ActualizarInformacionPage = () => {
  const { id } = useParams(); // Obtener el ID del distribuidor desde la URL
  const [distribuidor, setDistribuidor] = useState({});
  const [originalDistribuidor, setOriginalDistribuidor] = useState({});
  const navigate = useNavigate(); 

  useEffect(() => {
    const fetchDistribuidor = async () => {
      try {
        const response = await axios.get(`http://100.25.174.92:3000/distribuidores/distribuidores/${id}`);
        const distribuidorData = response.data;
        console.log('Datos del distribuidor:', distribuidorData); 
        setDistribuidor(distribuidorData);
        setOriginalDistribuidor(distribuidorData); // Guarda los datos originales
      } catch (error) {
        console.error('Error fetching distribuidor:', error);
        navigate('/distribuidores'); // Redirige si hay un error
      }
    };

    fetchDistribuidor();
  }, [id, navigate]);

  const handleChange = (event) => {
    const { id, value } = event.target;
    setDistribuidor((prevDistribuidor) => ({
      ...prevDistribuidor,
      [id]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Mostrar la ventana de confirmación con SweetAlert2
    const result = await Swal.fire({
      title: 'Confirmación',
      text: '¿Estás seguro de que deseas actualizar esta información?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, actualizar',
      cancelButtonText: 'Cancelar',
    });

    if (result.isConfirmed) {
      try {
        const updatedDistribuidor = {
          nombre_empresa: distribuidor.nombre_empresa,
          contacto_nombre: distribuidor.contacto_nombre,
          telefono: distribuidor.telefono,
          email: distribuidor.email,
          direccion: distribuidor.direccion,
          ciudad: distribuidor.ciudad,
          estado: distribuidor.estado,
          pais: distribuidor.pais,
          codigo_postal: distribuidor.codigo_postal,
          fecha_registro: distribuidor.fecha_registro,
          estado_activo: distribuidor.estado_activo
        };

        await axios.put(`http://localhost:3000/distribuidores/distribuidores/${id}`, updatedDistribuidor);
        await Swal.fire('Actualizado!', 'La información se ha actualizado correctamente.', 'success');
        navigate('/distribuidores'); // Redirige al usuario a la página de distribuidores después de actualizar
      } catch (error) {
        console.error('Error updating distribuidor:', error);
        await Swal.fire('Error', 'Hubo un problema al actualizar la información.', 'error');
      }
    }
  };

  return (
    <div className="container">
      <div className="header">
        <button onClick={() => navigate('/distribuidores')}>Cancelar</button>
        <h1>Actualizar Información</h1>
      </div>
      <div className="form-container">
        <div className="form-section">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="nombre_empresa">Nombre de la Empresa</label>
              <input
                type="text"
                id="nombre_empresa"
                value={distribuidor.nombre_empresa || ''}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="contacto_nombre">Nombre del Contacto</label>
              <input
                type="text"
                id="contacto_nombre"
                value={distribuidor.contacto_nombre || ''}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="telefono">Teléfono</label>
              <input
                type="text"
                id="telefono"
                value={distribuidor.telefono || ''}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                value={distribuidor.email || ''}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="direccion">Dirección</label>
              <input
                type="text"
                id="direccion"
                value={distribuidor.direccion || ''}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="ciudad">Ciudad</label>
              <input
                type="text"
                id="ciudad"
                value={distribuidor.ciudad || ''}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="estado">Estado</label>
              <input
                type="text"
                id="estado"
                value={distribuidor.estado || ''}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="pais">País</label>
              <input
                type="text"
                id="pais"
                value={distribuidor.pais || ''}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="codigo_postal">Código Postal</label>
              <input
                type="text"
                id="codigo_postal"
                value={distribuidor.codigo_postal || ''}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="fecha_registro">Fecha de Registro</label>
              <input
                type="date"
                id="fecha_registro"
                value={distribuidor.fecha_registro || ''}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="estado_activo">Estado Activo</label>
              <select
                id="estado_activo"
                value={distribuidor.estado_activo || ''}
                onChange={handleChange}
              >
                <option value="Activo">Activo</option>
                <option value="Inactivo">Inactivo</option>
              </select>
            </div>
            <div className="form-group">
              <button type="submit">Actualizar</button>
            </div>
          </form>
        </div>
        <div className="data-section">
          <h2>Datos Originales del Distribuidor</h2>
          <div className="data-field">
            <strong>Nombre de la Empresa:</strong> {originalDistribuidor.nombre_empresa || 'No disponible'}
          </div>
          <div className="data-field">
            <strong>Nombre del Contacto:</strong> {originalDistribuidor.contacto_nombre || 'No disponible'}
          </div>
          <div className="data-field">
            <strong>Teléfono:</strong> {originalDistribuidor.telefono || 'No disponible'}
          </div>
          <div className="data-field">
            <strong>Email:</strong> {originalDistribuidor.email || 'No disponible'}
          </div>
          <div className="data-field">
            <strong>Dirección:</strong> {originalDistribuidor.direccion || 'No disponible'}
          </div>
          <div className="data-field">
            <strong>Ciudad:</strong> {originalDistribuidor.ciudad || 'No disponible'}
          </div>
          <div className="data-field">
            <strong>Estado:</strong> {originalDistribuidor.estado || 'No disponible'}
          </div>
          <div className="data-field">
            <strong>País:</strong> {originalDistribuidor.pais || 'No disponible'}
          </div>
          <div className="data-field">
            <strong>Código Postal:</strong> {originalDistribuidor.codigo_postal || 'No disponible'}
          </div>
          <div className="data-field">
            <strong>Fecha de Registro:</strong> {originalDistribuidor.fecha_registro || 'No disponible'}
          </div>
          <div className="data-field">
            <strong>Estado Activo:</strong> {originalDistribuidor.estado_activo || 'No disponible'}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActualizarInformacionPage;
