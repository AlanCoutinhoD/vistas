import React from 'react';
import '../styles/ActualizarInformacion.css';

const ActualizarInformacionPage = () => {
    return (
        <div className="container">
            <div className="header">
                <button>Cancelar</button>
                <h1>ACTUALIZAR INFORMACION</h1>
                <div></div>
            </div>
            <div className="form-container">
                <div className="form-group">
                    <label htmlFor="nombre">Nombre</label>
                    <input type="text" id="nombre" defaultValue="Alan" />

                    <label htmlFor="fecha">Fecha</label>
                    <input type="text" id="fecha" defaultValue="12/10/2024" />

                    <label htmlFor="hora">Hora</label>
                    <input type="text" id="hora" defaultValue="10:30" />

                    <label htmlFor="sintomas">Síntomas</label>
                    <textarea id="sintomas">Temperaturas altas</textarea>

                    <button>Editar</button>
                </div>
                <div className="patient-data-container">
                    <div className="patient-data">
                        <table>
                            <thead>
                                <tr>
                                    <th>Nombre</th>
                                    <th>Fecha</th>
                                    <th>Hora</th>
                                    <th>Síntomas</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Alan Coutiño</td>
                                    <td>12/01/2024</td>
                                    <td>12:30</td>
                                    <td>Temperatura alta</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ActualizarInformacionPage;
