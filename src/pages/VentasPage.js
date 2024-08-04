import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Usaremos axios para la solicitud HTTP
import * as XLSX from 'xlsx'; // Importamos la biblioteca xlsx
import { saveAs } from 'file-saver'; // Importamos file-saver para guardar el archivo
import Swal from 'sweetalert2'; // Importamos SweetAlert2
import { useNavigate } from 'react-router-dom'; // Importamos useNavigate para la redirección
import '../styles/Ventas.css'; // Asegúrate de que la ruta sea correcta
import Header from '../components/Header';
import editImg from '../assets/edit.png';
import deleteImg from '../assets/delete.png';

const VentasPage = () => {
  const [ventas, setVentas] = useState([]);
  const navigate = useNavigate(); // Hook para la redirección

  useEffect(() => {
    const fetchVentas = async () => {
      try {
        const response = await axios.get('http://localhost:3000/sales/sales');
        setVentas(response.data);
      } catch (error) {
        console.error('Error fetching ventas:', error);
      }
    };

    fetchVentas();
  }, []);

  const handleDelete = async (id) => {
    // Mostrar alerta de confirmación
    const result = await Swal.fire({
      title: '¿Estás seguro?',
      text: "¡Esta acción no se puede deshacer!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#28a745',
      cancelButtonColor: '#dc3545',
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar',
    });

    if (result.isConfirmed) {
      try {
        // Realizar solicitud DELETE
        await axios.delete(`http://localhost:3000/sales/sales/${id}`);
        // Actualizar la lista de ventas después de eliminar
        setVentas((prevVentas) => prevVentas.filter((venta) => venta.id !== id));
        // Mostrar notificación de éxito
        Swal.fire({
          title: 'Eliminado',
          text: 'La venta ha sido eliminada exitosamente.',
          icon: 'success',
          confirmButtonColor: '#28a745',
        });
      } catch (error) {
        console.error('Error deleting venta:', error);
        // Mostrar notificación de error
        Swal.fire({
          title: 'Error',
          text: 'Hubo un problema al eliminar la venta.',
          icon: 'error',
          confirmButtonColor: '#dc3545',
        });
      }
    }
  };

  const handleEdit = (id) => {
    // Redirigir a la página de edición de venta
    navigate(`/ActualizarVenta/${id}`);
  };

  const handleGenerateReport = () => {
    // Crear una hoja de trabajo (worksheet) a partir de los datos
    const ws = XLSX.utils.json_to_sheet(ventas, {
      header: ['ID', 'Fecha', 'Medicamentos Vendidos', 'Total'],
    });

    // Crear un libro de trabajo (workbook) y agregar la hoja de trabajo
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Ventas');

    // Convertir el libro de trabajo en un archivo binario
    const wbout = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });

    // Crear un blob con el archivo y guardarlo
    const blob = new Blob([wbout], { type: 'application/octet-stream' });
    saveAs(blob, 'ventas_report.xlsx');
  };

  const handleNewSale = () => {
    navigate('/nueva-venta'); // Redirige a la página de nueva venta
  };

  return (
    <div>
      <Header />
      <main>
        <h2>Ventas</h2>
        <h3>Historial de Ventas</h3>
        <div className="actions">
          <button className="new" onClick={handleNewSale}>
            Nuevo
          </button>
          <button className="report" onClick={handleGenerateReport}>
            Generar Reporte
          </button>
          <div className="search">
            <input type="text" placeholder="Escribe para buscar..." />
            <button>Buscar</button>
          </div>
        </div>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Fecha</th>
              <th>Medicamentos Vendidos</th>
              <th>Total</th>
              <th>Borrar</th>
              <th>Editar</th>
            </tr>
          </thead>
          <tbody>
            {ventas.map((venta) => (
              <tr key={venta.id}>
                <td>{venta.id}</td>
                <td>{new Date(venta.fecha).toLocaleDateString()}</td>
                <td>{venta.medicamentos_vendidos}</td>
                <td>${venta.total.toFixed(2)}</td>
                <td>
                  <img
                    src={deleteImg}
                    alt="Borrar"
                    onClick={() => handleDelete(venta.id)}
                  />
                </td>
                <td>
                  <img
                    src={editImg}
                    alt="Editar"
                    onClick={() => handleEdit(venta.id)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
};

export default VentasPage;
