import React from 'react';
import worldMap from '../../image/world-map2.png';
import CallButton from '../Stage/CallButton';
import '../../styles/LogisticsSection.css';


const countries = [
  { name: 'Европа', flag: process.env.PUBLIC_URL + '/flags/europe.png', background: process.env.PUBLIC_URL + '/backgrounds/europe.png' },
  { name: 'Эмираты', flag: process.env.PUBLIC_URL + '/flags/uae.png', background: process.env.PUBLIC_URL + '/backgrounds/uae.png' },
  { name: 'Китай', flag: process.env.PUBLIC_URL + '/flags/china.png', background: process.env.PUBLIC_URL + '/backgrounds/china.png' },
  { name: 'Япония', flag: process.env.PUBLIC_URL + '/flags/japan.png', background: process.env.PUBLIC_URL + '/backgrounds/japan.png' },
  { name: 'Корея', flag: process.env.PUBLIC_URL + '/flags/korea.png', background: process.env.PUBLIC_URL + '/backgrounds/korea.png' },
  { name: 'Грузия', flag: process.env.PUBLIC_URL + '/flags/georgia.png', background: process.env.PUBLIC_URL + '/backgrounds/georgia.png' },
];


export default function LogisticsSection() {
  return (
    <section className="logistics-section">
      <div className="logistics-background" style={{ backgroundImage: `url(${worldMap})` }}/>
      <div className='logistics-title'>
      <span className="logistics-title-text">ЛОГИСТИКА</span>
      </div>
      <div className="call-button-logistic">
            <CallButton />
        </div>
      <div className="countries-list">
        {countries.map((country, index) => (
          <div className="country-card" key={index}>
            <div
              className="country-background"
              style={{ backgroundImage: `url(${country.background})` }}
            />
              <img src={country.flag} alt={country.name} className="country-flag" />
            <div className="country-content">
              <span className="country-name">{country.name}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
