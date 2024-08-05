import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/ActualizarVenta.css';
import { useParams, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'; // Importa SweetAlert2

const ActualizarVentaPage = () => {
  const { id } = useParams(); 
  const [venta, setVenta] = useState({});
  const [originalVenta, setOriginalVenta] = useState({});
  const navigate = useNavigate(); 

  useEffect(() => {
    const fetchVenta = async () => {
      try {
        const response = await axios.get(`http://100.25.174.92:3000/sales/sales/${id}`);
        const ventaData = response.data;
        console.log('Datos de la venta:', ventaData); 
        setVenta(ventaData);
        setOriginalVenta(ventaData); 
      } catch (error) {
        console.error('Error fetching venta:', error);
        navigate('/ventas'); 
      }
    };

    fetchVenta();
  }, [id, navigate]);

  const handleChange = (event) => {
    const { id, value } = event.target;
    setVenta((prevVenta) => ({
      ...prevVenta,
      [id]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Mostrar la ventana de confirmación con SweetAlert2
    const result = await Swal.fire({
      title: 'Confirmación',
      text: '¿Estás seguro de que deseas actualizar esta venta?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, actualizar',
      cancelButtonText: 'Cancelar',
    });

    if (result.isConfirmed) {
      try {
        const updatedVenta = {
          id,
          fecha: venta.fecha,
          medicamentos_vendidos: venta.medicamentos_vendidos,
          total: venta.total,
        };

        await axios.put(`http://100.25.174.92:3000/sales/sales/${id}`, updatedVenta);
        await Swal.fire('Actualizado!', 'La venta se ha actualizado correctamente.', 'success');
        navigate('/ventas'); 
      } catch (error) {
        console.error('Error updating venta:', error);
        await Swal.fire('Error', 'Hubo un problema al actualizar la venta.', 'error');
      }
    }
  };

  return (
    <div className="container">
      <div className="header">
        <button onClick={() => navigate('/ventas')}>Cancelar</button>
        <h1>ACTUALIZAR VENTA</h1>
      </div>
      <div className="form-container">
        <div className="form-section">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="fecha">Fecha</label>
              <input
                type="date"
                id="fecha"
                value={venta.fecha ? new Date(venta.fecha).toISOString().split('T')[0] : ''}
                onChange={handleChange}
              />

              <label htmlFor="medicamentos_vendidos">Medicamentos Vendidos</label>
              <input
                type="text"
                id="medicamentos_vendidos"
                value={venta.medicamentos_vendidos || ''}
                onChange={handleChange}
              />

              <label htmlFor="total">Total</label>
              <input
                type="number"
                id="total"
                value={venta.total || ''}
                onChange={handleChange}
              />

              <button type="submit">Actualizar</button>
            </div>
          </form>
        </div>
        <div className="data-section">
          <h2>Datos Originales de la Venta</h2>
          <div className="data-field">
            <strong>Fecha:</strong> {originalVenta.fecha ? new Date(originalVenta.fecha).toLocaleDateString() : 'No disponible'}
          </div>
          <div className="data-field">
            <strong>Medicamentos Vendidos:</strong> {originalVenta.medicamentos_vendidos || 'No disponible'}
          </div>
          <div className="data-field">
            <strong>Total:</strong> ${originalVenta.total || 'No disponible'}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActualizarVentaPage;
