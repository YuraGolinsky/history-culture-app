import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Figures.css';

const figuresData = [
  {
    name: 'Тарас Шевченко',
    description: 'Український поет, письменник, художник, громадський діяч. Він є одним з найбільш видатних культурних діячів України.',
    image: '/image/shevchenko.jpg',
  },
  {
    name: 'Леонардо да Вінчі',
    description: 'Італійський художник, вчений, інженер, винахідник. Один з найвидатніших людей епохи Відродження.',
    image: '/image/davinci.jpg',
  },
  {
    name: 'Альберт Ейнштейн',
    description: 'Німецький фізик-теоретик, один з засновників сучасної теоретичної фізики, лауреат Нобелівської премії.',
    image: '/image/einstein.jpg',
  },
  {
    name: 'Махатма Ганді',
    description: 'Індійський політичний діяч і духовний лідер, відомий своєю філософією ненасильницького опору.',
    image: '/image/gandhi.jpg',
  },
  {
    name: 'Мартін Лютер Кінг',
    description: 'Американський баптистський проповідник і громадський діяч, лідер руху за права людини.',
    image: '/image/king.jpg',
  },
  // Добавьте больше выдающихся личностей здесь
];

const Figures: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResult, setSearchResult] = useState(figuresData);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchClick = () => {
    const filteredFigures = figuresData.filter((figure) =>
      figure.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      figure.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setSearchResult(filteredFigures);
  };

  return (
    <div className="figures">
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
      <main className="figures-main">
        <section className="search-section">
          <input
            type="text"
            placeholder="Пошук постатей..."
            value={searchQuery}
            onChange={handleSearchChange}
            className="search-input"
          />
          <button onClick={handleSearchClick} className="search-button">Пошук</button>
        </section>
        <section className="figures-list">
          <h2>Видатні постаті</h2>
          <ul>
            {searchResult.length > 0 ? (
              searchResult.map((figure, index) => (
                <li key={index} className="figure-item">
                  <img src={figure.image} alt={figure.name} className="figure-image" />
                  <div>
                    <h3>{figure.name}</h3>
                    <p>{figure.description}</p>
                  </div>
                </li>
              ))
            ) : (
              <p>Постаті не знайдені</p>
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

export default Figures;
