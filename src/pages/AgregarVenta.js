import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify'; // Importa Toastify
import { useNavigate } from 'react-router-dom';
import '../styles/AgregarVenta.css'; 

const AgregarVenta = () => {
  const navigate = useNavigate(); // Hook para la navegación

  const handleRedirect = () => {
    navigate('/ventas'); 
  };

  const [fecha, setFecha] = useState('');
  const [medicamentosVendidos, setMedicamentosVendidos] = useState('');
  const [total, setTotal] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3000/sales/addSale', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fecha,
          medicamentos_vendidos: medicamentosVendidos,
          total: parseFloat(total),
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

     
      toast.success('Venta agregada exitosamente');

      setFecha('');
      setMedicamentosVendidos('');
      setTotal('');
    } catch (error) {
     
      toast.error(`Failed to fetch: ${error.message}`);
    }
  };

  return (
    <div>
      <button className="back-button" onClick={handleRedirect}>REGRESAR</button>
      <div className="inventory-container">
        <h1>AGREGAR VENTA</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="date"
            name="fecha"
            placeholder="FECHA"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
            required
          />
          <textarea
            name="medicamentos_vendidos"
            placeholder="MEDICAMENTOS VENDIDOS"
            value={medicamentosVendidos}
            onChange={(e) => setMedicamentosVendidos(e.target.value)}
            required
          />
          <input
            type="number"
            name="total"
            placeholder="TOTAL"
            value={total}
            onChange={(e) => setTotal(e.target.value)}
            required
          />
          <button type="submit">AGREGAR</button>
        </form>
        <ToastContainer /> {}
      </div>
    </div>
  );
};

export default AgregarVenta;
