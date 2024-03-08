/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"

const PublicationCard = ({ data }) => (
  <Link to={data.frontmatter.link} className="publication-card">
    {data.index % 2 == 0 ? (
        <img class="publication-border" src="/assets/ornaments/paper.svg"/>
      ) : (
        <img class="publication-border" src="/assets/ornaments/paper-2.svg"/>
      )}
    <h3 class="publication-name" href="">{data.frontmatter.title}</h3>
    <p class="publication-meta">{data.frontmatter.authors} ({data.frontmatter.date})</p>
  </Link>
)

export default PublicationCard
