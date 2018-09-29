const path = require(`path`);

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (
    node.internal.type === `ContentfulAsset` &&
    node.file.contentType.includes("image")
  ) {
    createNodeField({
      node,
      name: `folder`,
      value: node.title.split("_", 1)[0]
    });
  }
};

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allContentfulAsset(
          filter: { file: { contentType: { eq: "image/jpeg" } } }
        ) {
          group(field: fields___folder) {
            fieldValue
          }
        }
      }
    `).then(result => {
      console.log(JSON.stringify(result, null, 4));
      resolve();
    });
  });
};
