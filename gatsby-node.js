const path = require(`path`);
const dayjs = require("dayjs");
const customParseFormat = require("dayjs-ext/plugin/customParseFormat");

dayjs.extend(customParseFormat);

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;

  if (
    node.internal.type === `ContentfulAsset` &&
    node.file.contentType.includes("image")
  )
    createNodeField({
      node,
      name: `folder`,
      value: dayjs(node.title.split("_", 1)[0], {
        format: "YYMMDDHHmm"
      }).format("YYYY-MM-DDTHH:mm")
    });
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
    `).then(({ data: { allContentfulAsset } }) => {
      allContentfulAsset.group.forEach(group => {
        createPage({
          path: `photos/${group.fieldValue}`,
          component: path.resolve(`./src/templates/folder.js`),
          context: {
            folder: group.fieldValue
          }
        });
      });
      resolve();
    });
  });
};
