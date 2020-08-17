import { Fragment } from "react";

const PostDetails = ({ title, published, topic }) => {
  return (
    <Fragment>
      <h1 className="mb-4">{title}</h1>
      <p className="mb-8">
        {published && <time dateTime={published}>{published}</time>}
        {topic && (published ? `, ${topic}` : topic)}
      </p>
    </Fragment>
  );
};

export default PostDetails;
