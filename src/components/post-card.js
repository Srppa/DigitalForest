/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

const PostCard = ({ data }) => (
  <Link to={data.frontmatter.slug} className="news-card">
      {data.index % 2 == 0 ? (
        <img className="blog-border" src="/assets/ornaments/blog.svg"/>
      ) : (
        <img className="blog-border" src="/assets/ornaments/blog-2.svg"/>
      )}
      {data.frontmatter.featuredImage ? (
      <GatsbyImage image={data.frontmatter.featuredImage.childImageSharp.gatsbyImageData} alt={data.frontmatter.title + " - Featured image"} className="featured-image"
          />
      ) : (
          ""
      )}
      <div className="news-text">
          <h3 className="name" href="/akce-pristi-stanice-svet-2023">{data.frontmatter.title}</h3>
          <p className="meta" ><time>{data.frontmatter.date}</time></p>
      </div>
  </Link>
)

export default PostCard
