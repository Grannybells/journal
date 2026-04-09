import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { galleryImages, collageStyles, type GalleryImage } from '../data/gallery';

const GalleryPage = React.forwardRef<HTMLDivElement>((_, ref) => {
  const [lightbox, setLightbox] = useState<GalleryImage | null>(null);

  const openLightbox = (e: React.MouseEvent, img: GalleryImage) => {
    e.stopPropagation();
    setLightbox(img);
  };

  const closeLightbox = (e: React.MouseEvent) => {
    e.stopPropagation();
    setLightbox(null);
  };

  return (
    <div className="page page--gallery" ref={ref}>
      <div className="page__inner">
        <div className="page__header">
          <span className="page__chapter-label">Memories in</span>
          <h2 className="page__chapter-title">Pictures</h2>
          <div className="page__rule" />
        </div>

        <div className="page__body">
          <div className="collage">
            {galleryImages.map((img, idx) => {
              const s = collageStyles[idx % collageStyles.length];
              return (
                <button
                  key={img.id}
                  className="collage__photo"
                  style={{
                    transform: `rotate(${s.rotate}deg) translateY(${s.translateY}px)`,
                  }}
                  onClick={(e) => openLightbox(e, img)}
                  aria-label={`Photo ${img.id}`}
                >
                  <img
                    src={img.src}
                    alt={`Memory ${img.id}`}
                    className="collage__img"
                    loading="lazy"
                  />
                </button>
              );
            })}
          </div>
        </div>

        <div className="page__footer">
          <span className="page__number">— fin —</span>
        </div>
      </div>

      {lightbox &&
        createPortal(
          <div
            className="lightbox"
            onClick={closeLightbox}
            role="dialog"
            aria-modal="true"
            aria-label="Photo preview"
          >
            <div
              className="lightbox__content"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={lightbox.src}
                alt={`Memory ${lightbox.id}`}
                className="lightbox__image"
              />
              <button
                className="lightbox__close"
                onClick={closeLightbox}
                aria-label="Close"
              >
                ✕
              </button>
            </div>
          </div>,
          document.body
        )}
    </div>
  );
});

GalleryPage.displayName = 'GalleryPage';
export default GalleryPage;
