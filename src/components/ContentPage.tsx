import React from 'react';

export interface PageData {
  page: number;
  date: string;
  description: string;
}

interface ContentPageProps {
  data: PageData;
}

const ContentPage = React.forwardRef<HTMLDivElement, ContentPageProps>(
  ({ data }, ref) => {
    return (
      <div className="page page--content" ref={ref}>
        <div className="page__inner">
          <div className="page__header">
            <h2 className="page__chapter-title">Page {data.page}</h2>
            <div className="page__rule" />
            <p className="page__date">{data.date}</p>
          </div>

          <div className="page__body">
            <p className="page__text">{data.description}</p>
          </div>

          <div className="page__footer">
            <span className="page__number">— {data.page} —</span>
          </div>
        </div>
      </div>
    );
  }
);

ContentPage.displayName = 'ContentPage';
export default ContentPage;
