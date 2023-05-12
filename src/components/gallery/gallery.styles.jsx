import styled from "styled-components";

const Wrapper = styled.section`
  .gallery-img-container {
    position: relative;
    background: var(--clr-primary-5);

    .gallery-icon {
      position: absolute;
      top: 50%;
      left: 50%;
      font-size: 2rem;
      transform: translate(-50%, -50%);
      color: var(--clr-white);
      opacity: 0;
      cursor: pointer;
      transition: var(--transition);

      &:hover {
        opacity: 1;
      }
    }

    img {
      height: 17rem;
      object-fit: cover;
      transition: var(--transition);
      &:hover {
        opacity: 0.5;
      }
    }
  }

  @media screen and (min-width: 768px) {
    .gallery-center {
      display: flex;
      flex-wrap: wrap;
    }
    .gallery-img-container {
      flex: 0 0 50%;
    }
  }

  @media screen and (min-width: 992px) {
    .gallery-img-container {
      flex: 0 0 25%;
      color: aliceblue;
    }
  }
`;

export default Wrapper;
