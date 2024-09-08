import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Art.css';

const artData = [
  {
    title: 'Мона Ліза',
    artist: 'Леонардо да Вінчі',
    year: '1503',
    description: 'Одна з найвідоміших картин світу, написана Леонардо да Вінчі.',
    image: '/image/mona_lisa.jpg',
  },
  {
    title: 'Зоряна ніч',
    artist: 'Вінсент ван Гог',
    year: '1889',
    description: 'Картина Вінсента ван Гога, що зображує нічне небо з видимими зірками.',
    image: '/image/starry_night.jpg',
  },
  {
    title: 'Дівчина з перловою серйною',
    artist: 'Йохан Вермер',
    year: '1665',
    description: 'Картина Йохана Вермера, відома також як "Мона Ліза Півночі".',
    image: '/image/girl_with_pearl_earring.jpg',
  },
  {
    title: 'Сікстинська мадонна',
    artist: 'Рафаель',
    year: '1512',
    description: 'Одна з найбільших і найвідоміших картин Рафаеля, що зображує Діву Марію і дитину Ісуса.',
    image: '/image/sistine_madonna.jpg',
  },
];

const Art: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResult, setSearchResult] = useState(artData);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchClick = () => {
    const filteredArt = artData.filter((art) =>
      art.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.artist.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setSearchResult(filteredArt);
  };

  return (
    <div className="art">
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
      <main className="art-main">
        <section className="search-section">
          <input
            type="text"
            placeholder="Пошук мистецтва..."
            value={searchQuery}
            onChange={handleSearchChange}
            className="search-input"
          />
          <button onClick={handleSearchClick} className="search-button">Пошук</button>
        </section>
        <section className="art-list">
          <h2>Мистецтво</h2>
          <ul>
            {searchResult.length > 0 ? (
              searchResult.map((art, index) => (
                <li key={index} className="art-item">
                  <img src={art.image} alt={art.title} className="art-image" />
                  <div>
                    <h3>{art.title}</h3>
                    <p><strong>Автор:</strong> {art.artist}</p>
                    <p><strong>Рік:</strong> {art.year}</p>
                    <p>{art.description}</p>
                  </div>
                </li>
              ))
            ) : (
              <p>Произведення не знайдені</p>
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

export default Art;
