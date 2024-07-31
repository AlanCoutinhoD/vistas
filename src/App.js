import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import VentasPage from './pages/VentasPage';
import DoctorsPage from './pages/DoctorsPage'; // Asegúrate de incluir cualquier otra página
import LoginPage from './pages/LoginPage'; // Asegúrate de incluir cualquier otra página
import AgregarInventario from './pages/AgregarInventario';
import ModoPage from './pages/ModoPage';
import InventarioPage from './pages/InventarioPage';
import ContactosPage from './pages/ContactosPage';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/doctors" element={<DoctorsPage />} />
        <Route path="/ventas" element={<VentasPage />} />
        <Route path="/Agregar" element={<AgregarInventario />} />
        <Route path="/Modo" element={<ModoPage />} />
        <Route path="/InventarioM" element={<InventarioPage/>} />
        <Route path="/Contactos" element={<ContactosPage/>} />
        {/* Agrega más rutas según sea necesario */}
      </Routes>
    </Router>
  );
}

export default App;
