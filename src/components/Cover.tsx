import React from "react";

const Cover = React.forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <div className="page page--cover" ref={ref}>
      <div className="page__cover-inner">
        <div className="cover__border">
          <div className="cover__ornament cover__ornament--top">✦ ✦ ✦</div>

          <div className="cover__title-section">
            <h1 className="cover__title">Granny bell's</h1>
            <h1 className="cover__title cover__title--accent">Journal</h1>
            <div className="cover__rule" />
            <p className="cover__subtitle">
              Just the weird side of me when inlove
            </p>
          </div>

          <div className="cover__flourish">❧</div>

          <div className="cover__bottom">
            <div className="cover__rule cover__rule--thin" />
            <p className="cover__year">2026</p>
          </div>

          <div className="cover__ornament cover__ornament--bottom">✦ ✦ ✦</div>
        </div>
      </div>
    </div>
  );
});

Cover.displayName = "Cover";
export default Cover;
