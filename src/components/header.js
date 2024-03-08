/** @jsx jsx */
import { jsx } from "theme-ui"
import Navigation from "./navigation"

const Header = () => (
  <header className="header-max-width">
    <div id="menu" className="menu">
      <Navigation />
    </div>
    <div className="title-card">
        <img className="title-lines" src="/assets/ornaments/title.svg"/>
        <h1>Impact of digital<br />forests on<br />psychological<br />well-being</h1>
    </div>
    <img className="header-border-lines" src="/assets/ornaments/header.svg"/>
  </header>
)

export default Header
