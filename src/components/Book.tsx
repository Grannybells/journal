import { useRef, useState, useCallback } from "react";
import HTMLFlipBook from "react-pageflip";
import Cover from "./Cover";
import IntroPage from "./IntroPage";
import ContentPage, { type PageData } from "./ContentPage";
import GalleryPage from "./GalleryPage";
import { useBookSize } from "../hooks/useBookSize";

interface BookProps {
  pages: PageData[];
}

export default function Book({ pages }: BookProps) {
  const bookRef = useRef<any>(null);
  const [currentPage, setCurrentPage] = useState(0);
  const { width, height, scale } = useBookSize();

  // Cover(0) + Intro(1) + content pages + Gallery(last)
  const totalPages = 2 + pages.length + 1;

  const syncCurrentPage = useCallback(() => {
    const nextPage = bookRef.current?.pageFlip().getCurrentPageIndex();
    if (typeof nextPage === "number") {
      setCurrentPage(nextPage);
    }
  }, []);

  const handleFlip = useCallback(() => {
    syncCurrentPage();
  }, [syncCurrentPage]);

  const flipNext = () => {
    bookRef.current?.pageFlip().turnToNextPage();
    syncCurrentPage();
  };

  const flipPrev = () => {
    bookRef.current?.pageFlip().turnToPrevPage();
    syncCurrentPage();
  };

  const isFirst = currentPage === 0;
  const isLast = currentPage >= totalPages - 1;

  return (
    <div className="book-wrapper">
      <div
        className="book-scene"
        style={{ "--book-scale": scale } as React.CSSProperties}
      >
        <HTMLFlipBook
          ref={bookRef}
          className="book"
          style={{}}
          width={width}
          height={height}
          size="fixed"
          minWidth={200}
          maxWidth={600}
          minHeight={300}
          maxHeight={800}
          startPage={0}
          drawShadow={true}
          flippingTime={700}
          usePortrait={true}
          startZIndex={10}
          autoSize={false}
          maxShadowOpacity={0.6}
          showCover={true}
          mobileScrollSupport={true}
          clickEventForward={true}
          useMouseEvents={true}
          swipeDistance={10000}
          showPageCorners={false}
          disableFlipByClick={true}
          onFlip={handleFlip}
          renderOnlyPageLengthChange={false}
        >
          <Cover />
          <IntroPage />
          {pages.map((page) => (
            <ContentPage key={page.page} data={page} />
          ))}
          <GalleryPage />
        </HTMLFlipBook>
      </div>

      <div className="book-controls">
        <button
          className="book-controls__btn"
          onClick={flipPrev}
          disabled={isFirst}
          aria-label="Previous page"
        >
          ← Prev
        </button>

        <span className="book-controls__indicator">
          {currentPage + 1} / {totalPages}
        </span>

        <button
          className="book-controls__btn"
          onClick={flipNext}
          disabled={isLast}
          aria-label="Next page"
        >
          Next →
        </button>
      </div>
    </div>
  );
}
