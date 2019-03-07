const path = require(`path`);
const dayjs = require("dayjs");
const customParseFormat = require("dayjs-ext/plugin/customParseFormat");

dayjs.extend(customParseFormat);

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;

  if (node.internal.mediaType === `image/jpeg`) {
    createNodeField({
      node,
      name: `folder`,
      value: dayjs(node.relativePath.split("_", 1)[0], {
        format: "YYMMDDHHmm"
      }).format("YYYY-MM-DDTHH:mm")
    });
  }
};

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allFile {
          group(field: fields___folder) {
            fieldValue
          }
        }
      }
    `).then(({ data: { allFile } }) => {
      allFile.group.forEach(group => {
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
