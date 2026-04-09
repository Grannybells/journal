import React from "react";

const IntroPage = React.forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <div className="page page--content" ref={ref}>
      <div className="page__inner">
        <div className="page__header">
          <h2 className="page__chapter-title">Introduction</h2>
          <div className="page__rule" />
        </div>

        <div className="page__body">
          <p className="page__dropcap">
            <span className="dropcap">H</span>
            ello, my name is Gran Zulueta. I work as a Software developer and
            Alhea works as a Purchasing Assistant at Cleanfuel. The story begins
            when Alhea asked for my help. Her PC had WPS software which is
            prohibited in our office, as it came from suppliers. She asked for
            my help to remove it. During this time I had no feelings towards her
            whatsoever.
          </p>

          <p className="page__dropcap">
            But the more transactions we had together, especially during the
            election period, my feelings grew little by little. I still didn't
            have the courage to pursue her though since I knew at that time she
            was in a relationship. We had a few interactions outside of work,
            especially during the Christmas party practice, and that was when I
            started falling for Alhea. Hehe.
          </p>

          <div className="page__signature">
            <div className="page__rule page__rule--short" />
            <p className="page__signature-text">With all my love,</p>
            <p className="page__signature-name">Granny</p>
          </div>
        </div>

        <div className="page__footer">
          <span className="page__number">— i —</span>
        </div>
      </div>
    </div>
  );
});

IntroPage.displayName = "IntroPage";
export default IntroPage;
