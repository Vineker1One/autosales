import { useState, useEffect } from 'react';
import './mobileNotice.css';

function shouldShow() {
  const w = window.innerWidth;               // CSS-ширина
  const scale = window.visualViewport?.scale ?? 1;
  /*
    Показываем, если страница реально «мобильная»:
      • ширина < 1024
      • И при этом нет «уменьшения» (scale ≈ 1)
  */
  return w < 1024 && scale >= 0.98;
}

export default function MobileNotice() {
  const [show, setShow] = useState(shouldShow());

  useEffect(() => {
    const check = () => setShow(shouldShow());
    window.addEventListener('resize', check);
    window.visualViewport?.addEventListener('resize', check); // реагируем на «масштаб»
    return () => {
      window.removeEventListener('resize', check);
      window.visualViewport?.removeEventListener('resize', check);
    };
  }, []);

  if (!show) return null;

  return (
    <div className="mobile-notice">
      <p>
        Для корректного просмотра откройте сайт
        <br />на&nbsp;компьютере или&nbsp;включите «Версию&nbsp;для&nbsp;ПК».
      </p>

      <button onClick={() => setShow(false)}>Показать всё-таки</button>
    </div>
  );
}
