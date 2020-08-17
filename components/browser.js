const Browser = ({ ratio = 16 / 10, ...rest }) => (
  <div className="browser max-w-2xl">
    <div className="screenshot">
      <img {...rest} />
    </div>

    <style jsx>{`
      .browser {
        width: 100%;
        position: relative;
        border: 0.2rem solid currentColor;
      }

      .browser::before {
        display: block;
        content: "";
        height: 32px;
        border-bottom: 0.2rem solid currentColor;
        width: 100%;
      }

      .browser::after {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        width: 50%;
        top: 6px;
        height: 16px;
        content: "";
        border: 0.2rem solid currentColor;
        display: block;
      }

      .screenshot > :first-child {
        width: 100%;
      }
      .screenshot > img {
        height: auto;
      }
      .screenshot {
        position: relative;
      }
      .screenshot::before {
        content: "";
        display: block;
        padding-bottom: calc(100% / (16 / 10));
      }
      .screenshot > :first-child {
        position: absolute;
        object-fit: cover;
        object-position: top;
        top: 0;
        left: 0;
        height: 100%;
      }
    `}</style>
  </div>
);

export default Browser;
