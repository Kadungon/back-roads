import styled from "styled-components";

const Wrapper = styled.section`
  .about-img,
  .about-info {
    margin-bottom: 2rem;
  }

  @media screen and (min-width: 992px) {
    .about-center {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
    }

    .about-img,
    .about-info {
      flex: 0 0 calc(50% - 2rem);
      align-self: center;
      margin-bottom: 0;
    }

    @media screen and (min-width: 1170px) {
      .about-img::before {
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        border: 0.5rem solid var(--clr-primary-5);
        box-sizing: border-box;
        top: -1.5rem;
        left: -1.5rem;
        z-index: -1;
      }

      .about-img {
        position: relative;
      }

      .about-photo {
        position: relative;
      }
    }
  }
`;

export default Wrapper;
