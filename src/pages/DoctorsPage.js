import React, { useEffect, useState } from 'react';
import '../styles/Doctors.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import deleteImg from '../assets/delete.png';
import editImg from '../assets/edit.png';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate

const DoctorsPage = () => {
  const [doctors, setDoctors] = useState([]);
  const navigate = useNavigate(); // Hook para la navegación

  // Fetch doctors data when the component mounts
  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await fetch('http://localhost:3000/medicos/AllMedicos');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setDoctors(data);
      } catch (error) {
        console.error('Error fetching doctors:', error);
      }
    };

    fetchDoctors();
  }, []);

  // Function to handle delete with confirmation
  const handleDelete = (id) => {
    Swal.fire({
      title: '¿Estás seguro?',
      text: "Esta acción eliminará el médico de la base de datos.",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#28a745',
      cancelButtonColor: '#dc3545',
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar'
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const response = await fetch(`http://localhost:3000/medicos/medicos/${id}`, {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json',
            },
          });

          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }

          // Refresh the list of doctors
          setDoctors(doctors.filter(doctor => doctor.id !== id));

          // Show success alert
          Swal.fire(
            'Eliminado',
            'El médico ha sido eliminado.',
            'success'
          );
        } catch (error) {
          // Show error alert
          Swal.fire(
            'Error',
            `Hubo un problema al intentar eliminar el médico: ${error.message}`,
            'error'
          );
        }
      }
    });
  };

  // Function to handle edit
  const handleEdit = (id) => {
    navigate(`/ActualizarMedico/${id}`); // Navega a la página de edición con el ID del médico
  };

  return (
    <div className="doctors-page">
      <Header />
      <div className="doctors-container">
        <center>
          <h1>MEDICOS</h1>
          <p>LISTA DE MEDICOS</p>
        </center>
        <button className="new-button">NUEVO</button>
        <div className="search-bar">
          <input type="text" placeholder="Escribe para buscar..." />
          <button>Buscar</button>
        </div>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Especialidad</th>
              <th>Teléfono</th>
              <th>Email</th>
              <th>Dirección</th>
              <th>Fecha de Registro</th>
              <th>Disponibilidad</th>
              <th>Notas</th>
              <th>Borrar</th>
              <th>Editar</th>
            </tr>
          </thead>
          <tbody>
            {doctors.map(doctor => (
              <tr key={doctor.id}>
                <td>{doctor.id}</td>
                <td>{doctor.nombre} {doctor.apellido}</td>
                <td>{doctor.especialidad}</td>
                <td>{doctor.telefono}</td>
                <td>{doctor.email}</td>
                <td>{doctor.direccion}</td>
                <td>{new Date(doctor.fecha_registro).toLocaleDateString()}</td>
                <td>{doctor.disponibilidad}</td>
                <td>{doctor.notas}</td>
                <td className="actions">
                  <img 
                    src={deleteImg} 
                    alt="Eliminar" 
                    onClick={() => handleDelete(doctor.id)} 
                  />
                </td>
                <td className="actions">
                  <img 
                    src={editImg} 
                    alt="Editar" 
                    onClick={() => handleEdit(doctor.id)} 
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Footer />
    </div>
  );
};

export default DoctorsPage;
