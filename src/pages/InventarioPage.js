import React, { useState } from 'react';
import '../styles/InventarioM.css'; // Asegúrate de que la ruta sea correcta
import Header from '../components/Header';

const InventarioPage = () => {
  const [items, setItems] = useState([
    // Datos de ejemplo para tarjetas
    { id: 1, name: 'Paracetamol', lot: 2, stock: 23, price: '$35.50', description: 'Antigripal' },
    { id: 1, name: 'Paracetamol', lot: 2, stock: 23, price: '$35.50', description: 'Antigripal' }
    // Agrega más artículos según sea necesario
  ]);

  const addItem = () => {
    // Función para agregar un nuevo artículo
    const newItem = {
      id: items.length + 1,
      name: 'Nuevo Artículo',
      lot: 1,
      stock: 10,
      price: '$50.00',
      description: 'Descripción del nuevo artículo',
    };
    setItems([...items, newItem]);
  };

  return (
    <div>
       <Header/>
      <main>
        <h1>INVENTARIO</h1>
        <div className="controls">
          <button className="new-button" onClick={addItem}>NUEVO</button>
          <div className="search-bar">
            <input type="text" placeholder="Escribe para buscar..." />
            <button className="search-button">Buscar</button>
          </div>
        </div>
        <div className="inventory">
          {items.map(item => (
            <div key={item.id} className="card">
              <div className="card-content">
                <h2>{item.name}</h2>
                <p><strong>Lote:</strong> {item.lot}</p>
                <p><strong>Stock:</strong> {item.stock}</p>
                <p><strong>Precio:</strong> {item.price}</p>
                <p>{item.description}</p>
              </div>
              <button className="card-menu-button">...</button>
              <div className="card-menu">
                <button>Editar</button>
                <button>Eliminar</button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default InventarioPage;
