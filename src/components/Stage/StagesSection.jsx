import React from "react";
import CallButtonStage from "./CallButtonStage";
import StagesPhoto from '../../image/stages/StagesPhoto1.png';
import BrandIcons from "../Hero/BrandIcons";
import icon01        from "../../image/stages/icon01.png";
import icon02        from "../../image/stages/icon02.png";
import icon03        from '../../image/stages/icon03.png';
import icon04        from '../../image/stages/icon04.png';
import icon05        from '../../image/stages/icon05.png';
import icon06        from '../../image/stages/icon06.png';
import icon07        from '../../image/stages/icon07.png';
import icon08        from '../../image/stages/icon08.png';
import '../../styles/stagesSection.css'

const items = [
  {icon: icon01, text:'1. Заявка',                    deg:270},
  {icon: icon02, text:'2. Выбор автомобиля',          deg:315},
  {icon: icon03, text:'3. Бронирование',              deg: 0},
  {icon: icon04, text:'4. Заключение договора',       deg: 40},
  {icon: icon05, text:'5. Оплата и отправка в Россию',deg:90},
  {icon: icon06, text:'6. Таможня',                   deg:135},
  {icon: icon07, text:'7. Логистика',                 deg:180},
  {icon: icon08, text:'8. Выдача подготовленного авто',deg:225},
];

const StagesSection = () => {
  return (
    <section className="stages-section">
        <div className="hero-brand-icons">
          <BrandIcons />
        </div>
      <div className="stages-content">
        <div
        className="stages-grid"
        // style={{ backgroundImage: `url(${circleBg})` }}
      >
        <div className="circle-text"><span className="circle-text-stage">Этапы</span><br />продажи</div>
        {items.map(({ icon, text, deg }, idx) => (
            <div
              className="stage-item"
              key={idx}
              style={{ '--deg': `${deg}deg` }}
            >
              <img src={icon} className="stage-icon" alt="" />
              <span className="stage-label">{text}</span>
            </div>
          ))}
      </div>
          <div className="btn-img">
            <div className="image-wrapper">
              <img className="stages-photo" src={StagesPhoto} alt="Фон" />
            </div>
              <CallButtonStage />
        </div>
      </div>
    </section>
  );
};

export default StagesSection;
