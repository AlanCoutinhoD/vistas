import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2'; // Importa SweetAlert2
import { useNavigate } from 'react-router-dom'; 
import '../styles/Login.css'; // 

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); 

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    try {
      const response = await axios.post('http://100.25.174.92:3000/login/login', {
        username,
        password,
      });

      if (response.data.token) {
        // Guardar el JWT en localStorage
        localStorage.setItem('token', response.data.token);

        
        Swal.fire({
          title: 'Éxito',
          text: 'Inicio de sesión exitoso.',
          icon: 'success',
          confirmButtonColor: '#28a745',
        }).then(() => {
          
          navigate('/modo'); 
        });
      } else {
       
        Swal.fire({
          title: 'Error',
          text: 'Nombre de usuario o contraseña incorrectos.',
          icon: 'error',
          confirmButtonColor: '#dc3545',
        });
      }
    } catch (error) {
      console.error('Error durante el inicio de sesión:', error);
      Swal.fire({
        title: 'Error',
        text: 'Hubo un problema al intentar iniciar sesión.',
        icon: 'error',
        confirmButtonColor: '#dc3545',
      });
    }
  };

  return (
    <div className="login-container">
      <h1>LOGIN</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Nombre de Usuario</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Contraseña</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Iniciar Sesión</button>
      </form>
    </div>
  );
};

export default LoginPage;
