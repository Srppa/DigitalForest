/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

const MemberCard = ({ data }) => (
  <div className="member">
    {data.index % 2 == 0 ? (
      <img className="member-border" src="/assets/ornaments/member.svg"/>
    ) : (
      <img className="member-border" src="/assets/ornaments/member-2.svg"/>
    )}
    <Link to={data.frontmatter.link} class="member-href">
        <GatsbyImage
          image={data.frontmatter.featuredImage.childImageSharp.gatsbyImageData}
          alt={data.frontmatter.title + " - Featured image"}s
          className="member-thumbnail"
        />
        <p class="member-name">{data.frontmatter.title}</p>
        <p class="member-role">{data.frontmatter.description}</p>
    </Link>
  </div>
)

export default MemberCard
