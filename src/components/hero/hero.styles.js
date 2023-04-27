import styled from "styled-components";
import heroImage from "../../static/images/main.jpeg";

const Wrapper = styled.section`
  min-height: 100vh;
  background: var(--clr-primary-5);
  display: flex;
  justify-content: center;
  align-items: center;

  .hero-banner {
    text-align: center;
    color: var(--clr-white);
    padding: 0 3rem;

    h1 {
      text-transform: uppercase;
    }

    p {
      color: var(--clr-white);
      letter-spacing: var(--spacing);
      max-width: 34rem;
      margin-right: auto;
      margin-left: auto;
    }
  }

  .hero-btn {
    padding: 0.9rem 1.6rem;
    color: var(--clr-primary-5);
    background: var(--clr-white);
    font-size: 1.25rem;

    &:hover {
      background: transparent;
      color: var(--clr-white);
      border-color: var(--clr-white);
    }
  }

  @media screen and (min-width: 768px) {
    background: linear-gradient(rgb(44, 178, 186, 0.7), rgb(0, 0, 0, 0.7)),
      url(${heroImage}) center/cover no-repeat;

    .hero-banner {
      padding: 0;

      p {
        max-width: 48rem;
      }
    }
  }
`;

export default Wrapper;
