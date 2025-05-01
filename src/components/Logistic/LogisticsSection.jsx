import React from 'react';
import worldMap from '../../image/world-map2.png';
import CallButton from '../Stage/CallButton';
import '../../styles/LogisticsSection.css';


const countries = [
  { name: 'Европа', flag: '/flags/europe.png', background: '/backgrounds/europe.png' },
  { name: 'Эмираты', flag: '/flags/uae.png', background: '/backgrounds/uae.png' },
  { name: 'Китай', flag: '/flags/china.png', background: '/backgrounds/china.png' },
  { name: 'Япония', flag: '/flags/japan.png', background: '/backgrounds/japan.png' },
  { name: 'Корея', flag: '/flags/korea.png', background: '/backgrounds/korea.png' },
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
