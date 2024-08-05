import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate para la redirección
import '../styles/ExpedientePaciente.css';
import Header from '../components/HeaderConsultorio';
import Swal from 'sweetalert2'; // Importa SweetAlert2
import deleteIcon from '../assets/delete.png'; // Importa el ícono de eliminar

const ExpedientePacientePage = () => {
    const [pacientes, setPacientes] = useState([]);
    const [pacienteSeleccionado, setPacienteSeleccionado] = useState(null);
    const navigate = useNavigate(); // Hook para la navegación

    useEffect(() => {
        const fetchPacientes = async () => {
            try {
                const response = await axios.get('http://100.25.174.92:3000/pacientes/pacientes');
                setPacientes(response.data);
            } catch (error) {
                console.error('Error fetching pacientes:', error);
            }
        };

        fetchPacientes();
    }, []);

    const handleVerDetalles = (paciente) => {
        setPacienteSeleccionado(paciente);
    };

    const handleEliminar = async (id) => {
        const result = await Swal.fire({
            title: 'Confirmación',
            text: '¿Estás seguro de que deseas eliminar a este paciente?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí, eliminar',
            cancelButtonText: 'Cancelar',
        });

        if (result.isConfirmed) {
            try {
                await axios.delete(`http://100.25.174.92:3000/pacientes/pacientes/${id}`);
                setPacientes((prevPacientes) => prevPacientes.filter(paciente => paciente.id !== id));
                await Swal.fire('Eliminado!', 'El paciente ha sido eliminado.', 'success');
            } catch (error) {
                console.error('Error deleting paciente:', error);
                await Swal.fire('Error', 'Hubo un problema al eliminar el paciente.', 'error');
            }
        }
    };

    return (
        <div>
            <Header />
            <main>
                <h1>PACIENTES</h1>
                <div className="controls">
                    <button 
                        className="new-button" 
                        onClick={() => navigate('/AgregarPaciente')} // Redirige a la vista de agregar paciente
                    >
                        NUEVO PACIENTE
                    </button>
                    <div className="search-bar">
                        {/* <input type="date" placeholder="00/00/00" />
                        <button className="search-button">Buscar</button> */}
                    </div>
                </div>
                <div className="content">
                    <div className="left-section">
                        <div className="patient-list">
                            <h2>Lista de pacientes</h2>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Nombre</th>
                                        <th>Fecha de Nacimiento</th>
                                        <th>Teléfono</th>
                                        <th>Email</th>
                                        <th>Acciones</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {pacientes.map(paciente => (
                                        <tr key={paciente.id}>
                                            <td>{paciente.nombre} {paciente.apellido}</td>
                                            <td>{new Date(paciente.fecha_nacimiento).toLocaleDateString()}</td>
                                            <td>{paciente.telefono}</td>
                                            <td>{paciente.correo_electronico}</td>
                                            <td>
                                                <button 
                                                    className="view-button" 
                                                    onClick={() => handleVerDetalles(paciente)}
                                                >
                                                    👁️
                                                </button>
                                                <button 
                                                    className="delete-button" 
                                                    onClick={() => handleEliminar(paciente.id)}
                                                >
                                                    <img src={deleteIcon} alt="Eliminar" />
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="right-section">
                        {pacienteSeleccionado && (
                            <div className="patient-info">
                                <h2>INFORMACIÓN DEL PACIENTE</h2>
                                <p><strong>Nombre:</strong> {pacienteSeleccionado.nombre} {pacienteSeleccionado.apellido}</p>
                                <p><strong>Fecha de Nacimiento:</strong> {new Date(pacienteSeleccionado.fecha_nacimiento).toLocaleDateString()}</p>
                                <p><strong>Teléfono:</strong> {pacienteSeleccionado.telefono}</p>
                                <p><strong>Correo Electrónico:</strong> {pacienteSeleccionado.correo_electronico}</p>
                                <p><strong>Dirección:</strong> {pacienteSeleccionado.direccion}</p>
                                <p><strong>Ciudad:</strong> {pacienteSeleccionado.ciudad}</p>
                                <p><strong>Estado:</strong> {pacienteSeleccionado.estado}</p>
                                <p><strong>País:</strong> {pacienteSeleccionado.pais}</p>
                                <p><strong>Código Postal:</strong> {pacienteSeleccionado.codigo_postal}</p>
                                <p><strong>Fecha de Registro:</strong> {new Date(pacienteSeleccionado.fecha_registro).toLocaleDateString()}</p>
                                {/* <button className="edit-button">EDITAR</button>
                                <button className="documents-button">VER DOCUMENTOS DEL PACIENTE</button> */}
                            </div>
                        )}
                        {/* <div className="appointment-info">
                            <h2>INFORMACIÓN DE LA CITA</h2>
                            <p><strong>Fecha:</strong> [Fecha de la Cita]</p>
                            <p><strong>Síntomas:</strong> [Síntomas]</p>
                            <p><strong>Médico:</strong> [Nombre del Médico]</p>
                            <p><strong>Tratamiento:</strong> [Tratamiento]</p>
                        </div> */}
                    </div>
                </div>
            </main>
        </div>
    );
};

export default ExpedientePacientePage;
