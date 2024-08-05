import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import VentasPage from './pages/VentasPage';
import DoctorsPage from './pages/DoctorsPage'; 
import LoginPage from './pages/LoginPage'; 
import AgregarInventario from './pages/AgregarInventario';
import ModoPage from './pages/ModoPage';
import InventarioPage from './pages/InventarioPage';
import ContactosPage from './pages/ContactosPage';
import ActualizarInformacionPage from './pages/ActualizarPageInformacionPage';
import ExpedientePacientePage from './pages/ExpedientePacientePage';
import ActualizarMedicamentoPage from './pages/ActualizarMedicamento';
import AgregarVentaPage from './pages/AgregarVenta';
import AgregarMedicoPage from './pages/AgregarMedicoPage';
import ActualizarVentaPage from './pages/ActualizarVenta';
import DistribuidoresPage from './pages/DistribuidoresPage';
import 'react-toastify/dist/ReactToastify.css'; // Importa los estilos de Toastify
import ActualizarMedicoPage from './pages/ActualizarMedicoPage';
import ActualizarDistribuidor from './pages/ActualizarDistribuidor'
import AgregarPacientePage from './pages/AgregarPaciente';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/medicos" element={<DoctorsPage />} />
        <Route path="/ventas" element={<VentasPage />} />
        <Route path="/Agregar" element={<AgregarInventario />} />
        <Route path="/Modo" element={<ModoPage />} />
        <Route path="/InventarioM" element={<InventarioPage/>} />
        <Route path="/Contactos" element={<ContactosPage/>} />
        <Route path="/ActualizarInfo" element={<ActualizarInformacionPage/>} />
        <Route path="/ExpedientePaciente" element={<ExpedientePacientePage/>} />
        <Route path="/ActualizarMedicamento/:id" element={<ActualizarMedicamentoPage/>} />
        <Route path="/AgregarVenta" element={<AgregarVentaPage/>} />
        <Route path="/ActualizarVenta/:id" element={<ActualizarVentaPage/>} />
        <Route path="/AgregarMedico" element={<AgregarMedicoPage/>} />
        <Route path="/ActualizarMedico/:id" element={<ActualizarMedicoPage/>}/>
        <Route path="/Distribuidores" element={<DistribuidoresPage/>}/>
        <Route path="/ActualizarDistribuidor/:id" element={<ActualizarDistribuidor/>} />
        <Route path="/AgregarPaciente" element={<AgregarPacientePage></AgregarPacientePage>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
