import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify'; // Importa Toastify
import { useNavigate } from 'react-router-dom';
import '../styles/AgregarMedico.css'; 

const AgregarMedico = () => {
  const navigate = useNavigate(); // Hook para la navegación

  const handleRedirect = () => {
    navigate('/medicos'); 
  };

  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [especialidad, setEspecialidad] = useState('');
  const [telefono, setTelefono] = useState('');
  const [email, setEmail] = useState('');
  const [direccion, setDireccion] = useState('');
  const [disponibilidad, setDisponibilidad] = useState('');
  const [notas, setNotas] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://100.25.174.92:3000/medicos/addMedico', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nombre,
          apellido,
          especialidad,
          telefono,
          email,
          direccion,
          disponibilidad,
          notas,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

    
      toast.success('Médico agregado exitosamente');

      
      setNombre('');
      setApellido('');
      setEspecialidad('');
      setTelefono('');
      setEmail('');
      setDireccion('');
      setDisponibilidad('');
      setNotas('');
    } catch (error) {
      
      toast.error(`Failed to fetch: ${error.message}`);
    }
  };

  return (
    <div>
      <button className="back-button" onClick={handleRedirect}>REGRESAR</button>
      <div className="inventory-container">
        <h1>AGREGAR MÉDICO</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="nombre"
            placeholder="Nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />
          <input
            type="text"
            name="apellido"
            placeholder="Apellido"
            value={apellido}
            onChange={(e) => setApellido(e.target.value)}
            required
          />
          <input
            type="text"
            name="especialidad"
            placeholder="Especialidad"
            value={especialidad}
            onChange={(e) => setEspecialidad(e.target.value)}
            required
          />
          <input
            type="text"
            name="telefono"
            placeholder="Teléfono"
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="text"
            name="direccion"
            placeholder="Dirección"
            value={direccion}
            onChange={(e) => setDireccion(e.target.value)}
            required
          />
          <input
            type="text"
            name="disponibilidad"
            placeholder="Disponibilidad"
            value={disponibilidad}
            onChange={(e) => setDisponibilidad(e.target.value)}
            required
          />
          <textarea
            name="notas"
            placeholder="Notas"
            value={notas}
            onChange={(e) => setNotas(e.target.value)}
          />
          <button type="submit">AGREGAR</button>
        </form>
        <ToastContainer /> {}
      </div>
    </div>
  );
};

export default AgregarMedico;
