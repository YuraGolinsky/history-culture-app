
import React, { useState } from 'react';
import './RegisterForm.css'; 

const RegisterForm: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    if (!username || !password) {
      alert('Ім\'я користувача та пароль є обов\'язковими');
      return;
    }

    // Получаем текущие данные из localStorage
    const existingUsers = JSON.parse(localStorage.getItem('users') || '[]');

    // Проверка на уникальность
    if (existingUsers.find((user: { username: string }) => user.username === username)) {
      alert('Користувач вже існує');
      return;
    }

    // Добавляем нового пользователя
    existingUsers.push({ username, password });

    // Сохраняем данные обратно в localStorage
    localStorage.setItem('users', JSON.stringify(existingUsers));

    alert('Реєстрація успішна');
  };

  return (
    <div className="register-form">
      <h2>Реєстрація</h2>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Ім'я користувача"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Пароль"
      />
      <button onClick={handleRegister}>Зареєструватися</button>
    </div>
  );
};

export default RegisterForm;
