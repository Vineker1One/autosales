import { useState, useRef, useEffect } from 'react';
import '../../styles/reviewSection.css'

const initialVideos = [
  { src: process.env.PUBLIC_URL + '/videos/GENESISGV80.MOV', caption: 'Genesis GV80' },
  { src: process.env.PUBLIC_URL + '/videos/LANDROVER.MOV', caption: 'Land Rover Range Rover Supercharger' },
  { src: process.env.PUBLIC_URL + '/videos/Lexus.MOV', caption: 'Lexus RX' },
  { src: process.env.PUBLIC_URL + '/videos/MERCEDES_GLB.MOV', caption: 'Mercedes Benz GLB 200d' },
  { src: process.env.PUBLIC_URL + '/videos/AMG_GT.MOV', caption: 'Mercedes AMG GT' },
  { src: process.env.PUBLIC_URL + '/videos/BMWm340i.MOV', caption: 'BMW M340i' },
  { src: process.env.PUBLIC_URL + '/videos/cooper.MOV', caption: 'MINI COOPER' },
  { src: process.env.PUBLIC_URL + '/videos/Palisade.MOV', caption: 'Hyundai Palisade' },
];

const ReviewSection = () => {
    
    const [activeIndex, setActiveIndex] = useState(Math.floor(initialVideos.length / 2));

  const videoRefs = useRef([]);
  const wrapperRef = useRef(null);
  const containerRef = useRef(null);
  const reviewContainerRef = useRef(null);


  useEffect(() => {
  if (window.innerWidth <= 768 && reviewContainerRef.current && videoRefs.current[activeIndex]) {
    // Получаем карточку активного видео
    const card = videoRefs.current[activeIndex]?.parentElement;
    if (card) {
      // Скроллим контейнер так, чтобы карточка была по центру
      card.scrollIntoView({ behavior: 'auto', inline: 'center', block: 'nearest' });
    }
  }
}, []); // [] — только один раз при монтировании

    useEffect(() => {
    if (window.innerWidth <= 768 && containerRef.current && wrapperRef.current) {
      // берем первую карточку, она по размеру как все
      const card = wrapperRef.current.querySelector('.review-card');
      if (card) {
        const containerWidth = containerRef.current.offsetWidth;
        const cardWidth = card.offsetWidth;
        const sidePadding = (containerWidth - cardWidth) / 2;
        wrapperRef.current.style.paddingLeft = `${sidePadding}px`;
        wrapperRef.current.style.paddingRight = `${sidePadding}px`;
      }
    }
  }, []);

const handleCardClick = (index) => {
  setActiveIndex(index);
  // Центрируем на мобильном
  if (window.innerWidth <= 768 && containerRef.current && videoRefs.current[index]) {
    const container = containerRef.current;
    const card = videoRefs.current[index].parentNode;
    if (card && container) {
      // width карточки = card.offsetWidth
      // width контейнера = container.offsetWidth
      // card.offsetLeft - левый край относительно контейнера
      // Центрируем, чтобы середина карточки совпала с центром контейнера
      const scrollTo = card.offsetLeft - (container.offsetWidth / 2) + (card.offsetWidth / 2);
      container.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  }
};



useEffect(() => {
  videoRefs.current.forEach((video, index) => {
    if (video) {
      if (index !== activeIndex) {
        video.pause();
        video.currentTime = 0; // опционально: сбрасывать неактивное видео
      }
      // Не трогаем активное видео, оно на паузе по умолчанию
    }
  });
}, [activeIndex]);


  useEffect(() => {
    const handleFullscreenChange = () => {
      const video = videoRefs.current[activeIndex];
      if (video) {
        if (document.fullscreenElement || document.webkitFullscreenElement) {
          video.style.objectFit = 'contain';
        } else {
          video.style.objectFit = 'cover';
        }
      }
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    document.addEventListener('webkitfullscreenchange', handleFullscreenChange);

    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
      document.removeEventListener('webkitfullscreenchange', handleFullscreenChange);
    };
  }, [activeIndex]);

  const scrollPrev = () => {
    setActiveIndex((prev) => (prev - 1 + initialVideos.length) % initialVideos.length);
  };

  const scrollNext = () => {
    setActiveIndex((prev) => (prev + 1) % initialVideos.length);
  };

  const isMobile = window.innerWidth <= 768;

  const getWrapperTransform = () => {
    if (isMobile) {
      return 'none'; // На мобиле вообще убираем transform
    }
  
    const cardWidthRem = 14.3;
    const gapRem = 4;
    const totalCardSizeRem = cardWidthRem + gapRem;
    return `translateX(calc(50% - ${(activeIndex + 0.5) * totalCardSizeRem}rem))`;
  };
  
useEffect(() => {
  if (!isMobile) return;
  const container = containerRef.current;
  if (!container) return;

  const handleScroll = () => {
    const cards = Array.from(container.querySelectorAll('.review-card'));
    const center = container.scrollLeft + container.offsetWidth / 2;
    let minDiff = Infinity, idx = 0;
    cards.forEach((card, i) => {
      const cardCenter = card.offsetLeft + card.offsetWidth / 2;
      const diff = Math.abs(center - cardCenter);
      if (diff < minDiff) {
        minDiff = diff;
        idx = i;
      }
    });
    setActiveIndex(idx);
  };
  container.addEventListener('scroll', handleScroll, { passive: true });
  return () => container.removeEventListener('scroll', handleScroll);
}, [isMobile]);

  



  return (
    <section className="review-section" id="overview">
      <h2 className="review-title">ОБЗОР АВТОМОБИЛЕЙ</h2>

      <div className="review-container" ref={containerRef}>
        <div className="review-wrapper"  style={{
            transform: getWrapperTransform(),
          }}>
        {initialVideos.map((video, index) => {
          const isActive = index === activeIndex;

          return (
            <div
              key={index}
              className={`review-card ${isActive ? 'active' : 'inactive'}`}
              onClick={() => handleCardClick(index)}
              style={{ cursor: 'pointer' }}
            >
              <video
                ref={el => (videoRefs.current[index] = el)}
                src={video.src}
                controls={isActive}
                muted
                className="review-video"
                tabIndex={-1}
                // не прокручивайся при фокусе, если на мобильном
                onClick={e => e.stopPropagation()}
              />
            </div>
          );
        })}
        </div>

        {/* Кнопки внутри review-wrapper */}
        <button className="scroll-button-review left" onClick={scrollPrev}>
          ‹
        </button>
        <button className="scroll-button-review right" onClick={scrollNext}>
          ›
        </button>
      </div>

      {/* Точки */}
      <div className="dots-wrapper">
        {initialVideos.map((_, idx) => (
          <div
            key={idx}
            className={`dot ${idx === activeIndex ? 'active' : ''}`}
          />
        ))}
      </div>

      {/* Подпись текущего видео */}
      <div className="review-caption"><span className="review-caption-text">{initialVideos[activeIndex].caption}</span></div>
    </section>
  );
};

export default ReviewSection;
