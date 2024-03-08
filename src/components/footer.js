/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"
import { RiHeart2Line } from "react-icons/ri"

const Footer = () => (
  <footer className="footer" >
    <div className="footer-max-width">
      <div className="top-footer">
        <a href="https://cuni.cz/uken-1.html" target="_blank" className="logo uk">
          <img  src="/assets/logos/logo-uk.png"/>
        </a>
        <a href="https://www.czu.cz/en" target="_blank" className="logo czu">
          <img src="/assets/logos/logo-czu.png"/>
        </a>
        <a href="https://psu.cas.cz/en/" target="_blank" className="logo psu">
          <img  src="/assets/logos/logo-psu.png"/>
        </a>
        </div>
        <div className="bottom-footer">
            <p>© 2022 Digital Forest</p>
        </div>
    </div>
  </footer>
)

export default Footer
