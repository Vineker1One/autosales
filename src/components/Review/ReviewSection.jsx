import { useState, useRef, useEffect } from 'react';
import '../../styles/reviewSection.css'

const initialVideos = [
  { src: '/videos/GENESISGV80.MOV', caption: 'Genesis GV80' },
  { src: '/videos/LANDROVER.MOV', caption: 'Land Rover Range Rover Supercharger' },
  { src: '/videos/Lexus.MOV', caption: 'Lexus RX' },
  { src: '/videos/MERCEDES_GLB.MOV', caption: 'Mercedes Benz GLB 200d' },
  { src: '/videos/AMG_GT.MOV', caption: 'Mercedes AMG GT' },
  { src: '/videos/BMWm340i.mov', caption: 'BMW M340i' },
  { src: '/videos/cooper.mov', caption: 'MINI COOPER' },
  { src: '/videos/Palisade.mov', caption: 'Hyundai Palisade' },
];

const ReviewSection = () => {
    
    const [activeIndex, setActiveIndex] = useState(Math.floor(initialVideos.length / 2));

  const videoRefs = useRef([]);

  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (video) {
        if (index === activeIndex) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
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
  
  
  



  return (
    <section className="review-section" id="overview">
      <h2 className="review-title">ОБЗОР АВТОМОБИЛЕЙ</h2>

      <div className="review-container">
        <div className="review-wrapper"  style={{
            transform: getWrapperTransform(),
          }}>
          {initialVideos.map((video, index) => {
            const isActive = index === activeIndex;

            return (
              <div
                key={index}
                className={`review-card ${isActive ? 'active' : 'inactive'}`}
              >
                <video
                  ref={(el) => (videoRefs.current[index] = el)}
                  src={video.src}
                  controls={isActive}
                  muted
                  className="review-video"
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
