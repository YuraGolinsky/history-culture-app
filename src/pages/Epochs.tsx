import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Epochs.css';

const epochsData = [
  {
    name: 'Стародавній світ',
    description: 'Ця епоха охоплює ранні цивілізації, такі як Єгипет, Месопотамія, Індія і Китай. Це час розвитку писемності, ранніх форм державності та великих імперій. Стародавні цивілізації залишили значний слід в історії людства завдяки своїм досягненням у науці, архітектурі та культурі.',
    image: '/image/ancient-world.jpg'
  },
  {
    name: 'Середньовіччя',
    description: 'Епоха, що триває з падіння Західної Римської імперії до Відродження. Це період феодалізму, хрестових походів і розвитку середньовічних міст. Середньовіччя було часом великих змін і соціальних переворотів, коли Європа переживала трансформації в політичній, економічній та культурній сферах.',
    image: '/image/middle-ages.jpg'
  },
  {
    name: 'Новий час',
    description: 'Період з початку Відродження до початку сучасної епохи. Включає в себе етапи географічних відкриттів, промислової революції і розвитку національних держав. Ця епоха характеризується великими відкриттями, які змінили обличчя світу, а також значними науковими та культурними досягненнями.',
    image: '/image/modern-era.jpg'
  },
  {
    name: 'Сучасна епоха',
    description: 'Наш час, що характеризується глобалізацією, технологічними інноваціями і швидкими соціально-економічними змінами. Сучасна епоха є періодом, коли людство стикається з новими викликами, такими як технологічний прогрес, зміна клімату та глобальні соціальні та політичні трансформації.',
    image: '/image/contemporary-era.jpg'
  }
];

const Epochs: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResult, setSearchResult] = useState(epochsData);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchClick = () => {
    const filteredEpochs = epochsData.filter((epoch) =>
      epoch.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      epoch.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setSearchResult(filteredEpochs);
  };

  return (
    <div className="epochs">
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
        </nav>
      </header>
      <main className="epochs-main">
        <section className="search-section">
          <input
            type="text"
            placeholder="Пошук епох..."
            value={searchQuery}
            onChange={handleSearchChange}
            className="search-input"
          />
          <button onClick={handleSearchClick} className="search-button">Пошук</button>
        </section>
        <section className="epochs-list">
          <h2>Список епох</h2>
          <ul>
            {searchResult.length > 0 ? (
              searchResult.map((epoch, index) => (
                <li key={index} className="epoch-item">
                  <img src={epoch.image} alt={epoch.name} className="epoch-image" />
                  <div className="epoch-content">
                    <h3 className="epoch-title">{epoch.name}</h3>
                    <p className="epoch-description">{epoch.description}</p>
                  </div>
                </li>
              ))
            ) : (
              <p>Епохи не знайдені</p>
            )}
          </ul>
        </section>
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
  );
};

export default Epochs;
