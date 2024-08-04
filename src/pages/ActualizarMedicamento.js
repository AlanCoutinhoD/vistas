import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/ActualizarMedicamento.css';
import { useParams, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'; // Importa SweetAlert2

const ActualizarInformacionPage = () => {
  const { id } = useParams(); // Obtener el ID del medicamento desde la URL
  const [medicamento, setMedicamento] = useState({});
  const [originalMedicamento, setOriginalMedicamento] = useState({});
  const navigate = useNavigate(); // Hook para redirigir

  useEffect(() => {
    const fetchMedicamento = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/api/meds/${id}`);
        const medicamentoData = response.data[0];
        console.log('Datos del medicamento:', medicamentoData); // Verifica los datos en la consola
        setMedicamento(medicamentoData);
        setOriginalMedicamento(medicamentoData); // Guarda los datos originales
      } catch (error) {
        console.error('Error fetching medicamento:', error);
        navigate('/inventarioM'); // Redirige si hay un error
      }
    };

    fetchMedicamento();
  }, [id, navigate]);

  const handleChange = (event) => {
    const { id, value } = event.target;
    setMedicamento((prevMedicamento) => ({
      ...prevMedicamento,
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
        const updatedMedicamento = {
          id_medicamento_modificando: id,
          nombre_generico: medicamento.nombre_generico,
          nombre_comercial: medicamento.nombre_comercial,
          clasificacion_medicamento: medicamento.clasificacion_medicamento,
          presentacion_medicamento: medicamento.presentacion_medicamento,
          concentracion: medicamento.concentracion,
          volumen: medicamento.volumen,
          unidades_totales: medicamento.unidades_totales,
        };

        await axios.put('http://localhost:3000/api/meds', updatedMedicamento);
        await Swal.fire('Actualizado!', 'La información se ha actualizado correctamente.', 'success');
        navigate('/inventarioM'); // Redirige al usuario a la página de inventario después de actualizar
      } catch (error) {
        console.error('Error updating medicamento:', error);
        await Swal.fire('Error', 'Hubo un problema al actualizar la información.', 'error');
      }
    }
  };

  return (
    <div className="container">
      <div className="header">
        <button onClick={() => navigate('/inventarioM')}>Cancelar</button>
        <h1>ACTUALIZAR INFORMACION</h1>
      </div>
      <div className="form-container">
        <div className="form-section">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="nombre_generico">Nombre Genérico</label>
              <input
                type="text"
                id="nombre_generico"
                value={medicamento.nombre_generico || ''}
                onChange={handleChange}
              />

              <label htmlFor="nombre_comercial">Nombre Comercial</label>
              <input
                type="text"
                id="nombre_comercial"
                value={medicamento.nombre_comercial || ''}
                onChange={handleChange}
              />

              <label htmlFor="clasificacion_medicamento">Clasificación</label>
              <input
                type="text"
                id="clasificacion_medicamento"
                value={medicamento.clasificacion_medicamento || ''}
                onChange={handleChange}
              />

              <label htmlFor="presentacion_medicamento">Presentación</label>
              <input
                type="text"
                id="presentacion_medicamento"
                value={medicamento.presentacion_medicamento || ''}
                onChange={handleChange}
              />

              <label htmlFor="concentracion">Concentración</label>
              <input
                type="text"
                id="concentracion"
                value={medicamento.concentracion || ''}
                onChange={handleChange}
              />

              <label htmlFor="volumen">Volumen</label>
              <input
                type="text"
                id="volumen"
                value={medicamento.volumen || ''}
                onChange={handleChange}
              />

              <label htmlFor="unidades_totales">Unidades Totales</label>
              <input
                type="number"
                id="unidades_totales"
                value={medicamento.unidades_totales || ''}
                onChange={handleChange}
              />

              <button type="submit">Actualizar</button>
            </div>
          </form>
        </div>
        <div className="data-section">
          <h2>Datos Originales del Medicamento</h2>
          <div className="data-field">
            <strong>Nombre Genérico:</strong> {originalMedicamento.nombre_generico || 'No disponible'}
          </div>
          <div className="data-field">
            <strong>Nombre Comercial:</strong> {originalMedicamento.nombre_comercial || 'No disponible'}
          </div>
          <div className="data-field">
            <strong>Clasificación:</strong> {originalMedicamento.clasificacion_medicamento || 'No disponible'}
          </div>
          <div className="data-field">
            <strong>Presentación:</strong> {originalMedicamento.presentacion_medicamento || 'No disponible'}
          </div>
          <div className="data-field">
            <strong>Concentración:</strong> {originalMedicamento.concentracion || 'No disponible'}
          </div>
          <div className="data-field">
            <strong>Volumen:</strong> {originalMedicamento.volumen || 'No disponible'}
          </div>
          <div className="data-field">
            <strong>Unidades Totales:</strong> {originalMedicamento.unidades_totales || 'No disponible'}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActualizarInformacionPage;
