import Wrapper from "./hero.styles";

const Hero = () => {
  return (
    <Wrapper>
      <div className="hero-banner">
        <h1>continue exploring</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur
          blanditiis excepturi veniam eaque expedita rerum.
        </p>
        <a href="#featured" className="btn hero-btn scroll-link">
          explore tours
        </a>
      </div>
    </Wrapper>
  );
};

export default Hero;
