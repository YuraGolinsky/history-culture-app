import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Events.css';

const eventsData = [
  {
    title: 'Французька революція',
    date: '1789-1799',
    description: 'Соціально-політична революція у Франції, що привела до падіння монархії та утвердження республіки.',
    image: '/image/french_revolution.jpg',
  },
  {
    title: 'Перша світова війна',
    date: '1914-1918',
    description: 'Глобальний військовий конфлікт, в якому взяли участь більшість провідних держав світу.',
    image: '/image/ww1.jpg',
  },
  {
    title: 'Політ людини в космос',
    date: '1961',
    description: 'Юрій Гагарін став першою людиною, яка здійснила політ у космос.',
    image: '/image/spaceflight.jpg',
  },
  
];

const Events: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResult, setSearchResult] = useState(eventsData);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchClick = () => {
    const filteredEvents = eventsData.filter((event) =>
      event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setSearchResult(filteredEvents);
  };

  return (
    <div className="events">
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
      <main className="events-main">
        <section className="search-section">
          <input
            type="text"
            placeholder="Пошук подій..."
            value={searchQuery}
            onChange={handleSearchChange}
            className="search-input"
          />
          <button onClick={handleSearchClick} className="search-button">Пошук</button>
        </section>
        <section className="events-list">
          <h2>Видатні події</h2>
          <ul>
            {searchResult.length > 0 ? (
              searchResult.map((event, index) => (
                <li key={index} className="event-item">
                  <img src={event.image} alt={event.title} className="event-image" />
                  <div>
                    <h3>{event.title}</h3>
                    <p><strong>Дата:</strong> {event.date}</p>
                    <p>{event.description}</p>
                  </div>
                </li>
              ))
            ) : (
              <p>Події не знайдені</p>
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

export default Events;
