import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Countries.css';

const countriesData = [
  {
    name: 'Україна',
    description: 'Країна з багатою історією та культурою, відома своїми традиціями, народними ремеслами та мальовничими краєвидами.',
    image: '/image/ukraine.jpg',
  },
  {
    name: 'Франція',
    description: 'Франція є батьківщиною мистецтва, моди та гастрономії. Вона славиться своєю культурною спадщиною та значним впливом на світову історію.',
    image: '/image/france.jpg',
  },
  {
    name: 'Італія',
    description: 'Італія відома своїм багатим культурним спадком, вишуканою кухнею, модою та архітектурними шедеврами, такими як Колізей.',
    image: '/image/italy.jpg',
  },
  {
    name: 'Японія',
    description: 'Країна, де традиції поєднуються з сучасністю. Японія славиться своїми технологіями, культурними звичаями та природною красою.',
    image: '/image/japan.jpg',
  },
  {
    name: 'Індія',
    description: 'Індія — це країна контрастів, відома своєю різноманітною культурою, стародавніми храмами та багатою історією.',
    image: '/image/india.jpg',
  },
  {
    name: 'США',
    description: 'США є світовим лідером у багатьох сферах, включаючи економіку, технології та культуру. Країна відома своїм розмаїттям та свободою.',
    image: '/image/usa.jpg',
  },
  {
    name: 'Китай',
    description: 'Китай має багатю історію та культуру, вплив якої відчувається у всьому світі. Відома своєю традиційною медициною та великою стіною.',
    image: '/image/china.jpg',
  },
  {
    name: 'Бразилія',
    description: 'Бразилія відома своєю яскравою культурою, карнавалами, футболом і незайманими тропічними лісами Амазонки.',
    image: '/image/brazil.jpg',
  },
  {
    name: 'Єгипет',
    description: 'Країна з давньою історією, відома своїми пірамідами, фараонами та загадковою культурою стародавнього світу.',
    image: '/image/egypt.jpg',
  },
  {
    name: 'Австралія',
    description: 'Австралія славиться своєю дикою природою, унікальними видами тварин та відомими природними пам’ятками, такими як Великий Бар’єрний риф.',
    image: '/image/australia.jpg',
  },
  {
    name: 'Німеччина',
    description: 'Країна з багатою історією, відомою своєю інженерією, архітектурою, музикою та важливими історичними подіями.',
    image: '/image/germany.jpg',
  },
  {
    name: 'Мексика',
    description: 'Мексика відома своєю багатою культурою, стародавніми цивілізаціями, такими як майя та ацтеки, а також своїми фестивалями та кухнею.',
    image: '/image/mexico.jpg',
  }
];

const Countries: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResult, setSearchResult] = useState(countriesData);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchClick = () => {
    const filteredCountries = countriesData.filter((country) =>
      country.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      country.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setSearchResult(filteredCountries);
  };

  return (
    <div className="countries">
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
      <main className="countries-main">
        <section className="search-section">
          <input
            type="text"
            placeholder="Пошук країн..."
            value={searchQuery}
            onChange={handleSearchChange}
            className="search-input"
          />
          <button onClick={handleSearchClick} className="search-button">Пошук</button>
        </section>
        <section className="countries-list">
          <h2>Список країн</h2>
          <ul>
            {searchResult.length > 0 ? (
              searchResult.map((country, index) => (
                <li key={index} className="country-item">
                  <img src={country.image} alt={country.name} className="country-image" />
                  <div>
                    <h3>{country.name}</h3>
                    <p>{country.description}</p>
                  </div>
                </li>
              ))
            ) : (
              <p>Країни не знайдені</p>
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

export default Countries;
