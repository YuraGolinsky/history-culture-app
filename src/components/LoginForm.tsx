import React, { useState } from 'react';
import { useUser } from '../context/UserContext'; 
import './LoginForm.css'; 
const LoginForm: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { setUser } = useUser(); 

  const handleLogin = () => {

    console.log('Login:', username, password);
    setUser(username); 
  };

  return (
    <div className="login-form">
      <h2>Вхід</h2>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Ім'я"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Пароль"
      />
      <button onClick={handleLogin}>Увійти</button>
    </div>
  );
};

export default LoginForm;
