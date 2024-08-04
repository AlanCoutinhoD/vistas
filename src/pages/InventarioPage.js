import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/InventarioM.css';
import Header from '../components/Header';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const InventarioPage = () => {
  const [items, setItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate(); // Hook para redirigir

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/meds');
        setItems(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const fetchItems = async (search = '') => {
    try {
      const response = await axios.get(`http://localhost:3000/api/meds/search/${search}`);
      setItems(response.data);
    } catch (error) {
      console.error('Error fetching items:', error);
    }
  };

  const handleSearch = (event) => {
    event.preventDefault();
    fetchItems(searchTerm);
  };

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const deleteItem = async (id_medicamento) => {
    const result = await Swal.fire({
      title: '¿Estás seguro?',
      text: '¡No podrás revertir esto!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar'
    });

    if (result.isConfirmed) {
      try {
        await axios.delete('http://localhost:3000/api/meds', {
          data: { id_medicamento_ingresado: id_medicamento },
        });
        setItems(items.filter(item => item.id_medicamento !== id_medicamento));
        Swal.fire(
          'Eliminado',
          'El medicamento ha sido eliminado.',
          'success'
        );
      } catch (error) {
        console.error('Error deleting item:', error);
        Swal.fire(
          'Error',
          'Ocurrió un error al eliminar el medicamento.',
          'error'
        );
      }
    }
  };

  const addItem = () => {
    navigate('/agregar');
  };

  const editItem = (id_medicamento) => {
    navigate(`/ActualizarMedicamento/${id_medicamento}`);
  };

  return (
    <div>
      <Header />
      <main>
        <h1>INVENTARIO</h1>
        <div className="controls">
          <button className="new-button" onClick={addItem}>NUEVO</button>
          <form onSubmit={handleSearch} className="search-bar">
            <input
              type="text"
              placeholder="Escribe para buscar..."
              value={searchTerm}
              onChange={handleChange}
            />
            <button type="submit" className="search-button">Buscar</button>
          </form>
        </div>
        <div className="inventory">
          {items.map(item => (
            <div key={item.id_medicamento} className="card">
              <div className="card-content">
                <h2>{item.nombre_generico}</h2>
                <p><strong>Nombre Comercial:</strong> {item.nombre_comercial}</p>
                <p><strong>Clasificación:</strong> {item.clasificacion_medicamento}</p>
                <p><strong>Presentación:</strong> {item.presentacion_medicamento}</p>
                <p><strong>Concentración:</strong> {item.concentracion}</p>
                <p><strong>Volumen:</strong> {item.volumen}</p>
                <p><strong>Unidades Totales:</strong> {item.unidades_totales}</p>
              </div>
              <button className="card-menu-button">...</button>
              <div className="card-menu">
                <button onClick={() => deleteItem(item.id_medicamento)}>Eliminar</button>
                <button onClick={() => editItem(item.id_medicamento)}>Editar</button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default InventarioPage;
