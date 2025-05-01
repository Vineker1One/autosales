import React, { useState, useRef } from 'react';
import GalleryPhone from '../../image/GalleryPhone.png';
import '../../styles/gallerySection.css';

const initialPhotos = [
  { src: '/images/photo1.png', caption: '' },
  { src: '/images/photo5.jpg', caption: '' },
  { src: '/images/photo2.jpg', caption: '' },
  { src: '/images/photo3.jpg', caption: '' },
  { src: '/images/photo4.jpg', caption: '' },

];


const NEXT = (
    <svg xmlns="http://www.w3.org/2000/svg" width="8" height="13" viewBox="0 0 8 13" fill="none">
  <path d="M1 1L6 6.5L1 12" stroke="white" stroke-width="2"/>
</svg>
)

const PREV = (
    <svg xmlns="http://www.w3.org/2000/svg" width="8" height="13" viewBox="0 0 8 13" fill="none">
  <path d="M7 1L2 6.5L7 12" stroke="white" stroke-width="2"/>
</svg>
)

const GallerySection = () => {
    const [photos, setPhotos] = useState(initialPhotos);

    const scrollPrev = () => {
        const newPhotos = [...photos];
        const lastPhoto = newPhotos.pop();
        newPhotos.unshift(lastPhoto);
        setPhotos(newPhotos);
      };
      
  
    const scrollNext = () => {
      const newPhotos = [...photos];
      const firstPhoto = newPhotos.shift();
      newPhotos.push(firstPhoto);
      setPhotos(newPhotos);
    };
  
    return (
      <section className="gallery-section" >
        <img src={GalleryPhone} alt="Фон" className="gallery-background" />

        <div className="gallery-content" id="team">
        <div className="gallery-text">
            <div className='gallery-top-text'>
            <span className='text-us'>нам</span>
            <div className="trust-line">
                <span className='text-trust'>доверяют</span>
                <span className='text-comma'>,</span>
            </div>
            </div>
            <div className='gallery-bottom-text'>
            <span className='text-we-have'>у нас</span>
            <span className='text-buy'>покупают!</span>
            </div>
        </div>

  
          <div className="gallery-container">
          {/* <button className="scroll-button left" onClick={scrollPrev}>
            {PREV}
            </button> */}
            <div className="gallery-wrapper">
            {photos.map((photo, index) => {
            if (typeof photo === 'string') {
                console.warn('Найден элемент-строка, а ожидается объект:', photo);
                return null;
            }
            return (
                <div key={index} className="gallery-card">
                <div className="gallery-photo-container">
                    <img src={photo.src} alt={photo.caption} className="gallery-image" />
                </div>
                <div className="gallery-photo-caption">
                    {photo.caption}
                </div>
                </div>
            );
            })}
            </div>

            <button className="scroll-button right" onClick={scrollNext}>
              {NEXT}
            </button>
          </div>
        </div>
      </section>
    );
  };
  
  export default GallerySection;