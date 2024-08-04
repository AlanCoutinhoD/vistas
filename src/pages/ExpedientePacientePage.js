import React from 'react';
import '../styles/ExpedientePaciente.css'; // Asegúrate de que el nombre del archivo CSS coincida

const ExpedientePacientePage = () => {
    return (
        <div>
            <header>
                <div className="navbar">
                    <div className="logo">FARMACIA AMIGO</div>
                    <nav>
                        <a href="#">PACIENTES</a>
                        <a href="#">CITAS</a>
                    </nav>
                    <button className="mode-switch">CAMBIAR MODO</button>
                </div>
            </header>
            <main>
                <h1>EXPEDIENTE DEL PACIENTE</h1>
                <div className="controls">
                    <button className="new-button">NUEVO</button>
                    <div className="search-bar">
                        <input type="date" placeholder="00/00/00" />
                        <button className="search-button">Buscar</button>
                    </div>
                </div>
                <div className="content">
                    <div className="left-section">
                        <div className="patient-list">
                            <h2>Lista de citas del paciente</h2>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Nombre</th>
                                        <th>Fecha</th>
                                        <th>Hora</th>
                                        <th>Síntomas</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Alan Coutiño</td>
                                        <td>12/01/2024</td>
                                        <td>12:30</td>
                                        <td>Temperatura alta</td>
                                        <td><button className="view-button">👁️</button></td>
                                    </tr>
                                    {/* Repetir filas según sea necesario */}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="right-section">
                        <div className="patient-info">
                            <h2>INFORMACIÓN DEL PACIENTE</h2>
                            <p><strong>Nombre:</strong> Alan Emmanuel Díaz Coutiño</p>
                            <p><strong>Fecha de Nacimiento:</strong> 25/09/2003</p>
                            <p><strong>Peso:</strong> 45 kilos</p>
                            <p><strong>Género:</strong> Hombre</p>
                            <button className="edit-button">EDITAR</button>
                            <button className="documents-button">VER DOCUMENTOS DEL PACIENTE</button>
                        </div>
                        <div className="appointment-info">
                            <h2>INFORMACIÓN DE LA CITA</h2>
                            <p><strong>Fecha:</strong> 25/09/2003</p>
                            <p><strong>Síntomas:</strong> Fiebre</p>
                            <p><strong>Médico:</strong> Juan</p>
                            <p><strong>Tratamiento:</strong> Reposo absoluto, posteriormente tomar una pastilla cada 5 horas después de comer</p>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default ExpedientePacientePage;
