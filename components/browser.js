const Browser = ({ ratio = 16 / 10, ...rest }) => (
  <div className="screenshot">
    <img className="rounded-md" {...rest} />
    <style jsx>{`
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
