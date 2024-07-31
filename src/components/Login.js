import React from 'react';
import '../styles/Login.css'; // Ruta a tu CSS

const Login = () => {
  return (
    <div className="login-container">
      <h1>Login</h1>
      <form action="#" method="post">
        <input type="text" name="user" placeholder="USER" required />
        <input type="password" name="password" placeholder="PASSWORD" required />
        <button type="submit">INICIAR SESIÓN</button>
      </form>
    </div>
  );
};

export default Login;
