/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import { Link, graphql } from "gatsby"
import { RiArrowRightLine, RiArrowLeftLine } from "react-icons/ri"
import Layout from "../components/layout"
import PublicationCard from "../components/publication-card"
import Seo from "../components/seo"

export const publicationListQuery = graphql`
  query publicationListQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { template: { eq: "publication" } } }
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "YYYY")
            link
            slug
            title
            authors
          }
        }
      }
    }
  }
`

class PublicationsIndex extends React.Component {
  render() {
    const { data } = this.props
    //this.props.pageContext
    const blogSlug = "/publications/"
    
    for(let i = 0; i < data.allMarkdownRemark.edges.length; i++){
      data.allMarkdownRemark.edges[i].node.index = i
    }

    const posts = data.allMarkdownRemark.edges
      .map(edge => <PublicationCard key={edge.node.id} data={edge.node} />)

    return (
      <Layout className="blog-page">
        <Seo
          title={"Publications"}
          description={
            "Digital forest publications"
          }
        />
        <h2>Publikace</h2>
        <div className="team-cont">{posts}</div>
      </Layout>
    )
  }
}

export default PublicationsIndex

