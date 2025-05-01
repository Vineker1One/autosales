import "../../styles/hero.css";
import autoImage from '../../image/main-auto.png';
import Navbar from './Navbar';
import ContactButton from "./ContactButton";
import CallButton from "./CallButton";
import BrandIcons from "./BrandIcons";
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
        </div>

        {/* Кнопки "Связаться" и "Заказать звонок" */}
        <div className="hero-buttons">
          <ContactButton />
          <CallButton />
        </div>

        {/* Бренды */}
        <div className="hero-brand-icons">
          <BrandIcons />
        </div>

        <div className="hero-bottom-shadow" />


      </div>
    </section>
  );
}
