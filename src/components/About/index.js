import Header from '../Header'

import './index.css'

const About = () => (
  <div className="about-container">
    <Header />
    <div className="about-img-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/about-sm-img.png"
        alt="about"
        className="about-small"
      />
      <img
        src="https://assets.ccbp.in/frontend/react-js/about-lg-img.png"
        className="about-large"
        alt="about"
      />
    </div>
  </div>
)

export default About
