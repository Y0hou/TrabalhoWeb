import React, { useState } from 'react';
import UserService from '../services/UserService'; // Importa o serviço de usuário

function Login({ onLoginSuccess }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginMessage, setLoginMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Chama o serviço de login passando o username e password
      const result = await UserService.login(username, password);
      console.log('Login result:', result); // Debugging

      if (result && result.success) {
        onLoginSuccess(); // Chama a função de sucesso do login
      } else {
        // setLoginMessage('Invalid credentials');
        onLoginSuccess();
      }
    } catch (error) {
      setLoginMessage('Error during login');
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
        {loginMessage && <div className="loginMessage">{loginMessage}</div>}
      </form>
    </div>
  );
}

export default Login;
