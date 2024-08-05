import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify'; // Importa Toastify
import { useNavigate } from 'react-router-dom';
import '../styles/AgregarPaciente.css'; // Asegúrate de que el archivo CSS se llame AgregarPaciente.css

const AgregarPaciente = () => {
  const navigate = useNavigate(); // Hook para la navegación

  const handleRedirect = () => {
    navigate('/ExpedientePaciente'); // Redirige a la lista de pacientes
  };

  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [fechaNacimiento, setFechaNacimiento] = useState('');
  const [telefono, setTelefono] = useState('');
  const [direccion, setDireccion] = useState('');
  const [ciudad, setCiudad] = useState('');
  const [estado, setEstado] = useState('');
  const [pais, setPais] = useState('');
  const [codigoPostal, setCodigoPostal] = useState('');
  const [fechaRegistro, setFechaRegistro] = useState('');
  const [correo, setCorreo] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://100.25.174.92:3000/pacientes/pacientes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nombre,
          apellido,
          fecha_nacimiento: fechaNacimiento,
          telefono,
          direccion,
          ciudad,
          estado,
          pais,
          codigo_postal: codigoPostal,
          fecha_registro: fechaRegistro,
          correo,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      toast.success('Paciente agregado exitosamente');
      setNombre('');
      setApellido('');
      setFechaNacimiento('');
      setTelefono('');
      setDireccion('');
      setCiudad('');
      setEstado('');
      setPais('');
      setCodigoPostal('');
      setFechaRegistro('');
      setCorreo('');
    } catch (error) {
      toast.error(`Failed to fetch: ${error.message}`);
    }
  };

  return (
    <div>
      <button className="back-button" onClick={handleRedirect}>REGRESAR</button>
      <div className="inventory-container">
        <h1>AGREGAR PACIENTE</h1>
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
            type="date"
            name="fecha_nacimiento"
            placeholder="Fecha de Nacimiento"
            value={fechaNacimiento}
            onChange={(e) => setFechaNacimiento(e.target.value)}
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
            type="text"
            name="direccion"
            placeholder="Dirección"
            value={direccion}
            onChange={(e) => setDireccion(e.target.value)}
            required
          />
          <input
            type="text"
            name="ciudad"
            placeholder="Ciudad"
            value={ciudad}
            onChange={(e) => setCiudad(e.target.value)}
            required
          />
          <input
            type="text"
            name="estado"
            placeholder="Estado"
            value={estado}
            onChange={(e) => setEstado(e.target.value)}
            required
          />
          <input
            type="text"
            name="pais"
            placeholder="País"
            value={pais}
            onChange={(e) => setPais(e.target.value)}
            required
          />
          <input
            type="text"
            name="codigo_postal"
            placeholder="Código Postal"
            value={codigoPostal}
            onChange={(e) => setCodigoPostal(e.target.value)}
            required
          />
          <input
            type="datetime-local"
            name="fecha_registro"
            placeholder="Fecha de Registro"
            value={fechaRegistro}
            onChange={(e) => setFechaRegistro(e.target.value)}
            required
          />
          <input
            type="email"
            name="correo"
            placeholder="Correo Electrónico"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
            required
          />
          <button type="submit">AGREGAR</button>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
};

export default AgregarPaciente;
