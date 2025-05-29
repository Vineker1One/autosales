import "../../styles/hero.css";
import autoImage from '../../image/main-auto.png';
import Navbar from './Navbar';
import ContactButton from "./ContactButton";
import CallButton from "./CallButton";

import HeaderText from "./HeroText";
import blackAuto from "../../image/blackAuto.png";

export default function HeroSection() {
  return (
    <section className="hero-section" id="home">
      <img src={blackAuto} alt="auto" className="hero-background-image" />
      <div className="hero-shadow"></div>
      <div className="hero-content">
        {/* Навбар */}
        <div className="hero-navbar">
          <Navbar />
          
        </div>

        {/* Заголовок */}
        <div className="hero-header-text">
          <HeaderText />
          <h1 className="header-main-title">ПОДАРИ СЕБЕ РОСКОШЬ ВЫГОДНО</h1>
        </div>

        {/* Кнопки "Связаться" и "Заказать звонок" */}





      </div>

        <div className="hero-buttons">
          <ContactButton />
          <CallButton />
        </div>
    </section>
  );
}
