import { Fragment } from "react";

const PostDetails = ({ title, published, topic }) => (
  <Fragment>
    <h1>{title}</h1>
    <p>
      {published && <time dateTime={published}>{published}</time>}
      {topic && (published ? `, ${topic}` : topic)}
    </p>
  </Fragment>
);

export default PostDetails;
