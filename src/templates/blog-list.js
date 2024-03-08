/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import { Link, graphql } from "gatsby"
import { RiArrowRightLine, RiArrowLeftLine } from "react-icons/ri"
import Layout from "../components/layout"
import PostCard from "../components/post-card"
import Seo from "../components/seo"

export const blogListQuery = graphql`
  query blogListQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { template: { eq: "blog-post" } } }
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "DD. MM. YYYY")
            slug
            title
            featuredImage {
              childImageSharp {
                gatsbyImageData(layout: CONSTRAINED, width: 90, height: 90)
              }
            }
          }
        }
      }
    }
  }
`

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const { currentPage, numPages } = this.props.pageContext
    const blogSlug = "/blog/"

    for(let i = 0; i < data.allMarkdownRemark.edges.length; i++){
      data.allMarkdownRemark.edges[i].node.index = i
    }

    const posts = data.allMarkdownRemark.edges
      .filter(edge => !!edge.node.frontmatter.date)
      .map(edge => <PostCard key={edge.node.id} data={edge.node} />)

    return (
      <Layout className="blog-page">
        <Seo
          title={"Blog — Page " + currentPage + " of " + numPages}
          description={
            "Stackrole base blog page " + currentPage + " of " + numPages
          }
        />
        <h2>Blog</h2>
        <div className="blog-posts">{posts}</div>
      </Layout>
    )
  }
}

export default BlogIndex
