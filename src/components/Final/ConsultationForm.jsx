import React, { useState } from "react";
import "../../styles/ConsultationForm.css";

const ConsultationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    agreement: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.agreement) {
      alert("Пожалуйста, согласитесь с политикой обработки данных.");
      return;
    }

    // Подготовка данных для бэка:
    const preparedData = {
      name: formData.name.trim(),
      email: formData.email.trim(),
      phone: formData.phone.trim(),
      agreedToPolicy: formData.agreement,
    };

    console.log("Отправляем данные на сервер:", preparedData);

    // Тут будет запрос на сервер, например:
    // await axios.post("/api/consultation", preparedData);

    // Пока просто очищаем форму:
    setFormData({
      name: "",
      email: "",
      phone: "",
      agreement: false,
    });
  };

  return (
    <form className="consultation-form" onSubmit={handleSubmit}>
      <span className="form-title">Оставьте заявку на консультацию</span>

      <label className="form-label">
        Имя
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="form-input"
          placeholder="Иван Иванов"
          required
        />
      </label>

      <label className="form-label">
        Email
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="form-input"
          placeholder="mail@example.com"
          required
        />
      </label>

      <label className="form-label">
        Телефон
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="form-input"
          placeholder="+7 (999) 999-99-99"
          required
        />
      </label>

      <button type="submit" className="form-submit">
        Оставить заявку
      </button>

      <label className="form-agreement">
        <input
          type="checkbox"
          name="agreement"
          checked={formData.agreement}
          onChange={handleChange}
          required
        />
        Я соглашаюсь с политикой конфиденциальности и правилами обработки персональных данных.
      </label>
    </form>
  );
};

export default ConsultationForm;
