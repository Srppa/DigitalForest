/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import { Link, graphql } from "gatsby"
import { RiArrowRightLine, RiArrowLeftLine } from "react-icons/ri"
import Layout from "../components/layout"
import MemberCard from "../components/member-card"
import Seo from "../components/seo"

export const TeamListQuery = graphql`
  query teamListQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { template: { eq: "team-member" } } }
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            title
            link
            description
            featuredImage {
              childImageSharp {
                gatsbyImageData(layout: CONSTRAINED, width: 170, height: 170)
              }
            }
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
    const blogSlug = "/team/"

    for(let i = 0; i < data.allMarkdownRemark.edges.length; i++){
      data.allMarkdownRemark.edges[i].node.index = i
    }

    const posts = data.allMarkdownRemark.edges
      .map(edge => <MemberCard key={edge.node.id} data={edge.node} />)

    return (
      <Layout className="blog-page">
        <Seo
          title={"Team"}
          description={
            "Digital forest team"
          }
        />
        <h2>Team</h2>
        <div className="team-cont">{posts}</div>
      </Layout>
    )
  }
}

export default PublicationsIndex

