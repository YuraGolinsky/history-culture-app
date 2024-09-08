// src/pages/Home.tsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; 
import LoginForm from '../components/LoginForm';
import RegisterForm from '../components/RegisterForm';
import UserInfo from '../components/UserInfo'; 
import { UserProvider } from '../context/UserContext'; 
import Quiz from '../components/Quiz'; // Импорт компонента Quiz

const Home: React.FC = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [showQuiz, setShowQuiz] = useState(false); // Состояние для открытия теста

  const handleShowLogin = () => {
    setShowLogin(true);
    setShowRegister(false);
    setShowQuiz(false); // Закрыть тест при открытии входа
  };

  const handleShowRegister = () => {
    setShowRegister(true);
    setShowLogin(false);
    setShowQuiz(false); // Закрыть тест при открытии регистрации
  };

  const handleShowQuiz = () => {
    setShowQuiz(true);
    setShowLogin(false);
    setShowRegister(false); // Закрыть модальные окна при открытии теста
  };

  const closeModal = () => {
    setShowLogin(false);
    setShowRegister(false);
    setShowQuiz(false); // Закрыть тест при закрытии модального окна
  };

  return (
    <UserProvider>
      <div className="home">
        <header className="home-header">
          <nav className="home-navbar">
            <ul className="home-nav-menu">
              <li><Link to="/">Головна</Link></li>
              <li><Link to="/epochs">Епохи</Link></li>
              <li><Link to="/countries">Країни</Link></li>
              <li><Link to="/figures">Видатні постаті</Link></li>
              <li><Link to="/events">Події</Link></li>
              <li><Link to="/art">Мистецтво</Link></li>
            </ul>
            <div className="home-auth-links">
              <button onClick={handleShowLogin}>Вхід</button>
              <button onClick={handleShowRegister}>Реєстрація</button>
              <button onClick={handleShowQuiz}>Тест</button> {/* Кнопка для открытия теста */}
            </div>
          </nav>
        </header>
        <main className="home-main">
          <h1>Ласкаво просимо до додатка "Історія та Культура"!</h1>
          <p>Наш додаток дозволяє вам досліджувати різні епохи, країни, видатних постатей, події та мистецтво.</p>
          <img src="/image/path-to-your-welcome-image.jpg" alt="Привітання" className="welcome-image" />
          <UserInfo /> {/* Додаємо компонент для відображення інформації про користувача */}

          {/* Модальне вікно для входу */}
          {showLogin && (
            <div className="modal-overlay" onClick={closeModal}>
              <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="close-modal" onClick={closeModal}>×</button>
                <LoginForm />
              </div>
            </div>
          )}

          {/* Модальне вікно для реєстрації */}
          {showRegister && (
            <div className="modal-overlay" onClick={closeModal}>
              <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="close-modal" onClick={closeModal}>×</button>
                <RegisterForm />
              </div>
            </div>
          )}

          {/* Модальне вікно для теста */}
          {showQuiz && (
            <Quiz onClose={closeModal} />
          )}
        </main>
        <footer className="home-footer">
          <div className="footer-content">
            <p>&copy; 2024 History & Culture App. All rights reserved.</p>
            <nav className="footer-nav">
              <ul>
                <li><Link to="/">Головна</Link></li>
                <li><Link to="/epochs">Епохи</Link></li>
                <li><Link to="/countries">Країни</Link></li>
                <li><Link to="/figures">Видатні постаті</Link></li>
                <li><Link to="/events">Події</Link></li>
                <li><Link to="/art">Мистецтво</Link></li>
              </ul>
            </nav>
          </div>
        </footer>
      </div>
    </UserProvider>
  );
};

export default Home;
