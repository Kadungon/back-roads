import Wrapper from "./about.styles";
import aboutImage from "../../static/images/about.jpeg";

const About = () => {
  return (
    <Wrapper className="section" id="about">
      <div className="section-title">
        <h2>
          About <span>Us</span>
        </h2>
      </div>
      <div className="section-center about-center">
        <article className="about-img">
          <img src={aboutImage} className="about-photo" alt="awesome beach" />
        </article>

        <article className="about-info">
          <h3>explore the diffrence</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            quod perspiciatis necessitatibus commodi, optio iste.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            quod perspiciatis necessitatibus commodi, optio iste.
          </p>
          <a href="#about" className="btn">
            read more
          </a>
        </article>
      </div>
    </Wrapper>
  );
};

export default About;
