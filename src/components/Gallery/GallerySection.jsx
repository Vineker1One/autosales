import React, { useState } from 'react';
import '../../styles/gallerySection.css';

const photos = [
  { src: '/images/photo7.jpg', caption: 'Mercedes Benz Coupe E450 AMG' },
  { src: '/images/photo5.jpg', caption: 'Mercedes-Benz AMG GLC 43' },
  { src: '/images/photo2.jpg', caption: 'KIA STONIC' },
  { src: '/images/photo3.jpg', caption: 'MAZDA CX-60' },
  { src: '/images/photo4.jpg', caption: 'Hyundai Palisade Calligraphy' },
  { src: '/images/photo6.jpg', caption: 'Porsche Macan GTS' },
];

const GallerySection = () => {
  const [openIdx, setOpenIdx] = useState(null);

  const handleOpen = (idx) => setOpenIdx(idx);
  const handleClose = () => setOpenIdx(null);

  // Закрытие по ESC
  React.useEffect(() => {
    const onKeyDown = (e) => e.key === "Escape" && handleClose();
    if (openIdx !== null) {
      window.addEventListener("keydown", onKeyDown);
    }
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [openIdx]);

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
                <img
                  src={photo.src}
                  alt={photo.caption}
                  className="gallery-image"
                  onClick={() => handleOpen(idx)}
                  style={{ cursor: "pointer" }}
                />
              </div>
              {photo.caption && (
                <div className="gallery-photo-caption">{photo.caption}</div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox modal */}
      {openIdx !== null && (
        <div className="gallery-modal" onClick={handleClose}>
          <div className="gallery-modal-content" onClick={e => e.stopPropagation()}>
            <img src={photos[openIdx].src} alt={photos[openIdx].caption} className="gallery-modal-image" />
            <div className="gallery-modal-caption">{photos[openIdx].caption}</div>
            <button className="gallery-modal-close" onClick={handleClose}>×</button>
          </div>
        </div>
      )}
    </section>
  );
};

export default GallerySection;
