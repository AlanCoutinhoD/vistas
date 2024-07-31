import React from 'react';
import '../styles/Login.css';
//import Header from '../components/Header';
import Footer from '../components/Footer';

const LoginPage = () => {
  return (
    <div className="login-page">
     
      <div className="login-container">
        <h1>Login</h1>
        <form action="#" method="post">
          <input type="text" name="user" placeholder="USER" required />
          <input type="password" name="password" placeholder="PASSWORD" required />
          <button type="submit">INICIAR SESIÓN</button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default LoginPage;
