const path = require("path")
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  const blogList = path.resolve(`./src/templates/blog-list.js`)
  const publicationList = path.resolve(`./src/templates/publication-list.js`)
  const teamList = path.resolve(`./src/templates/team-list.js`)


  const result = await graphql(`
    {
      allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
        edges {
          node {
            id
            frontmatter {
              slug
              template
              title
            }
          }
        }
      }
    }
  `)

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  // Create markdown pages
  const posts = result.data.allMarkdownRemark.edges
    .filter(edge => edge.node.frontmatter.template != "team-member")
    .filter(edge => edge.node.frontmatter.template != "publication")

  posts.forEach((post, index) => {
    const id = post.node.id

    createPage({
      path: post.node.frontmatter.slug,
      component: path.resolve(
        `src/templates/${String(post.node.frontmatter.template)}.js`
      ),
      // additional data can be passed via context
      context: {
        id
      },
    })

  })

  createPage({
    path: `/blog`,
    component: blogList,
  })

  createPage({
    path: `/publications`,
    component: publicationList,
  })

  createPage({
    path: `/team`,
    component: teamList,
  })
}

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}
