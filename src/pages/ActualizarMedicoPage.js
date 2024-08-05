import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/ActualizarMedico.css'; 
import { useParams, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'; // Importa SweetAlert2

const ActualizarMedicoPage = () => {
  const { id } = useParams(); // Obtener el ID del médico desde la URL
  const [doctor, setDoctor] = useState({});
  const [originalDoctor, setOriginalDoctor] = useState({});
  const navigate = useNavigate(); 

  useEffect(() => {
    const fetchDoctor = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/medicos/medicos/${id}`);
        const doctorData = response.data;
        setDoctor(doctorData);
        setOriginalDoctor(doctorData); 
      } catch (error) {
        console.error('Error fetching doctor:', error);
        navigate('/medicos');
      }
    };

    fetchDoctor();
  }, [id, navigate]);

  const handleChange = (event) => {
    const { id, value } = event.target;
    setDoctor((prevDoctor) => ({
      ...prevDoctor,
      [id]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Mostrar la ventana de confirmación con SweetAlert2
    const result = await Swal.fire({
      title: 'Confirmación',
      text: '¿Estás seguro de que deseas actualizar la información del médico?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, actualizar',
      cancelButtonText: 'Cancelar',
    });

    if (result.isConfirmed) {
      try {
        const updatedDoctor = {
          nombre: doctor.nombre,
          apellido: doctor.apellido,
          especialidad: doctor.especialidad,
          telefono: doctor.telefono,
          email: doctor.email,
          direccion: doctor.direccion,
          disponibilidad: doctor.disponibilidad,
          notas: doctor.notas,
        };

        await axios.put(`http://localhost:3000/medicos/medicos/${id}`, updatedDoctor);
        await Swal.fire('¡Actualizado!', 'La información del médico ha sido actualizada.', 'success');
        navigate('/medicos'); 
      } catch (error) {
        console.error('Error updating doctor:', error);
        await Swal.fire('Error', 'Hubo un problema al actualizar la información del médico.', 'error');
      }
    }
  };

  return (
    <div className="container">
      <div className="header">
        <button onClick={() => navigate('/medicos')}>Cancelar</button>
        <h1>Actualizar Información del Médico</h1>
      </div>
      <div className="form-container">
        <div className="form-section">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="nombre">Nombre</label>
              <input
                type="text"
                id="nombre"
                value={doctor.nombre || ''}
                onChange={handleChange}
              />

              <label htmlFor="apellido">Apellido</label>
              <input
                type="text"
                id="apellido"
                value={doctor.apellido || ''}
                onChange={handleChange}
              />

              <label htmlFor="especialidad">Especialidad</label>
              <input
                type="text"
                id="especialidad"
                value={doctor.especialidad || ''}
                onChange={handleChange}
              />

              <label htmlFor="telefono">Teléfono</label>
              <input
                type="text"
                id="telefono"
                value={doctor.telefono || ''}
                onChange={handleChange}
              />

              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                value={doctor.email || ''}
                onChange={handleChange}
              />

              <label htmlFor="direccion">Dirección</label>
              <input
                type="text"
                id="direccion"
                value={doctor.direccion || ''}
                onChange={handleChange}
              />

              <label htmlFor="disponibilidad">Disponibilidad</label>
              <input
                type="text"
                id="disponibilidad"
                value={doctor.disponibilidad || ''}
                onChange={handleChange}
              />

              <label htmlFor="notas">Notas</label>
              <textarea
                id="notas"
                value={doctor.notas || ''}
                onChange={handleChange}
              ></textarea>

              <button type="submit">Actualizar</button>
            </div>
          </form>
        </div>
        <div className="data-section">
          <h2>Datos Originales del Médico</h2>
          <div className="data-field">
            <strong>Nombre:</strong> {originalDoctor.nombre || 'No disponible'}
          </div>
          <div className="data-field">
            <strong>Apellido:</strong> {originalDoctor.apellido || 'No disponible'}
          </div>
          <div className="data-field">
            <strong>Especialidad:</strong> {originalDoctor.especialidad || 'No disponible'}
          </div>
          <div className="data-field">
            <strong>Teléfono:</strong> {originalDoctor.telefono || 'No disponible'}
          </div>
          <div className="data-field">
            <strong>Email:</strong> {originalDoctor.email || 'No disponible'}
          </div>
          <div className="data-field">
            <strong>Dirección:</strong> {originalDoctor.direccion || 'No disponible'}
          </div>
          <div className="data-field">
            <strong>Disponibilidad:</strong> {originalDoctor.disponibilidad || 'No disponible'}
          </div>
          <div className="data-field">
            <strong>Notas:</strong> {originalDoctor.notas || 'No disponible'}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActualizarMedicoPage;
