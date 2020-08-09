import { Fragment } from "react";

const PostDetails = ({ title, published, topic }) => {
  return (
    <Fragment>
      <h1 className="mb-md">{title}</h1>
      <p className="mb-lg">
        {published && <time dateTime={published}>{published}</time>}
        {topic && (published ? `, ${topic}` : topic)}
      </p>
    </Fragment>
  );
};

export default PostDetails;
