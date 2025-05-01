import React from "react";
import CallButton from "./CallButton";
import Applications from '../../image/applications.png';
import Issuance from '../../image/issuance.png';
import SelectCar from '../../image/selectCar.png';
import booking from '../../image/booking.png';
import contract from '../../image/contract.png';
import sending from '../../image/sending.png';
import customs from '../../image/customs.png';
import logistic from '../../image/logistic.png';
import StagesPhoto from '../../image/StagesPhoto1.png';
import '../../styles/stagesSection.css'

const StagesSection = () => {
  return (
    <section className="stages-section">
      <div className="stages-content">
        <div className="stages-grid">
          <div className="stage">
            <div className="stage-image"> <img src={Applications}/> </div>
            <span className="stage-text">1. Заявка</span>
          </div>
          <div className="stage">
            <div className="stage-image"> <img className="select-car" src={SelectCar}/> </div>
            <span className="stage-text">2. Выбор автомобиля</span>
          </div>
          <div className="stage">
            <div className="stage-image"> <img className="booking" src={booking}/> </div>
            <span className="stage-text">3. Бронирование</span>
          </div>
          <div className="stage">
            <div className="stage-image"> <img src={contract}/> </div>
            <span className="stage-text">4. Заключение договора</span>
          </div>
          <div className="stage">
            <div className="stage-image"> <img src={sending}/> </div>
            <span className="stage-text">5. Оплата и отправка в Россию</span>
          </div>
          <div className="stage">
            <div className="stage-image"> <img src={customs}/> </div>
            <span className="stage-text">6. Таможня</span>
          </div>
          <div className="stage">
            <div className="stage-image"> <img src={logistic}/> </div>
            <span className="stage-text">7. Логистика</span>
          </div>
          <div className="stage">
            <div className="stage-image"> <img src={Issuance}/> </div>
            <span className="stage-text">8. Выдача подготовленного авто</span>
          </div>
        </div>
          <div className="btn-img">
          <div className="image-wrapper">
            <img className="stages-photo" src={StagesPhoto} alt="Фон" />
          </div>
          <div className="circle-text"><span className="circle-text-stage">Этапы</span><br />продажи</div>
          <div className="call-button-stage">
            <CallButton />
          </div>
        </div>
      </div>
    </section>
  );
};

export default StagesSection;
