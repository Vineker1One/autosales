import React, { useState, useRef } from 'react';

import '../../styles/gallerySection.css';

const photos = [
  { src: '/images/photo7.jpg', caption: 'Mercedes Benz Coupe E450 AMG' },
  { src: '/images/photo5.jpg', caption: 'Mercedes-Benz AMG GLC 43' },
  { src: '/images/photo2.jpg', caption: 'KIA STONIC' },
  { src: '/images/photo3.jpg', caption: ' MAZDA CX-60' },
  { src: '/images/photo4.jpg', caption: 'Hyundai Palisade Calligraphy ' },
  { src: '/images/photo6.jpg', caption: 'Porsche Macan GTS' },

];


const GallerySection = () => {
  return (
    <section className="gallery-section" id="team">
      <div className="gallery-text">
        <span className="text-us">нам доверяют, у нас покупают!</span>
      </div>
      <div className="gallery-content">
        <div className="gallery-wrapper">
          {photos.map((photo, idx) => (
            <div key={idx} className="gallery-card">
              <div className="gallery-photo-container">
                <img src={photo.src} alt={photo.caption} className="gallery-image"/>
              </div>
              {photo.caption && (
                <div className="gallery-photo-caption">{photo.caption}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;