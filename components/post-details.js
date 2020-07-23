const { Fragment } = require("react");

const PostDetails = ({ title, dateTime, date, topic }) => (
  <Fragment>
    <h1 className="mb-md">{title}</h1>
    <p className="mb-lg">
      <time dateTime={dateTime}>{date}</time>, {topic}
    </p>
  </Fragment>
);

export default PostDetails;
