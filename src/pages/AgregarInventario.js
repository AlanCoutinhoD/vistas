import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify'; // Importa Toastify
import { useNavigate } from 'react-router-dom';
import '../styles/Inventario.css'; 





const AgregarInventario = () => {

  const navigate = useNavigate(); 

  const handleRedirect = () => {
    navigate('/InventarioM'); 
  };
  
  
  const [nombreGenerico, setNombreGenerico] = useState('');
  const [nombreComercial, setNombreComercial] = useState('');
  const [clasificacion, setClasificacion] = useState('');
  const [presentacion, setPresentacion] = useState('');
  const [concentracion, setConcentracion] = useState('');
  const [volumen, setVolumen] = useState('');
  const [unidadesTotales, setUnidadesTotales] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3000/api/meds', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nombre_generico_ingresado: nombreGenerico,
          nombre_comercial_ingresado: nombreComercial,
          clasificacion_ingresado: clasificacion,
          presentacion_ingresado: presentacion,
          concentracion_ingresado: concentracion,
          volumen_ingresado: volumen,
          unidades_totales_ingresado: unidadesTotales,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      // Mostrar notificación de exito
      toast.success('Medicamento agregado exitosamente');

      // Limpiar campos despues del envío
      setNombreGenerico('');
      setNombreComercial('');
      setClasificacion('');
      setPresentacion('');
      setConcentracion('');
      setVolumen('');
      setUnidadesTotales('');
    } catch (error) {
      // Mostrar notificación de error
      toast.error(`Failed to fetch: ${error.message}`);
    }
  };

  return (
    <div>
      <button className="back-button"  onClick={handleRedirect} >REGRESAR</button>
      <div className="inventory-container">
        <h1>AGREGAR MEDICAMENTO</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="nombre_generico"
            placeholder="NOMBRE GENERICO"
            value={nombreGenerico}
            onChange={(e) => setNombreGenerico(e.target.value)}
            required
          />
          <input
            type="text"
            name="nombre_comercial"
            placeholder="NOMBRE COMERCIAL"
            value={nombreComercial}
            onChange={(e) => setNombreComercial(e.target.value)}
            required
          />
          <input
            type="text"
            name="clasificacion"
            placeholder="CLASIFICACION DEL MEDICAMENTO"
            value={clasificacion}
            onChange={(e) => setClasificacion(e.target.value)}
            required
          />
          <input
            type="text"
            name="presentacion"
            placeholder="PRESENTACION DEL MEDICAMENTO"
            value={presentacion}
            onChange={(e) => setPresentacion(e.target.value)}
            required
          />
          <input
            type="text"
            name="concentracion"
            placeholder="CONCENTRACION DEL MEDICAMENTO"
            value={concentracion}
            onChange={(e) => setConcentracion(e.target.value)}
            required
          />
          <input
            type="text"
            name="volumen"
            placeholder="VOLUMEN DEL MEDICAMENTO"
            value={volumen}
            onChange={(e) => setVolumen(e.target.value)}
            required
          />
          <input
            type="number"
            name="unidades_totales"
            placeholder="UNIDADES TOTALES"
            value={unidadesTotales}
            onChange={(e) => setUnidadesTotales(e.target.value)}
            required
          />
          <button type="submit">AGREGAR</button>
        </form>
        <ToastContainer /> {}
      </div>
    </div>
  );
};

export default AgregarInventario;
