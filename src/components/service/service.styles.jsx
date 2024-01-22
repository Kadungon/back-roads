import styled from "styled-components";

const Wrapper = styled.section`
  background: var(--clr-grey-10);

  .service {
    margin-bottom: 3rem;
    text-align: center;
  }

  svg {
    background: var(--clr-primary-5);
    color: var(--clr-primary-1);
    padding: 0.5rem;
    font-size: 2rem;
    margin-bottom: 1.5rem;
  }

  .service-text {
    max-width: 20rem;
    margin-left: auto;
    margin-right: auto;
  }

  @media screen and (min-width: 576px) {
    .service-center {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
    }

    .service {
      flex: 0 0 calc(50% - 1rem);
      margin-bottom: 1rem;
    }
  }

  @media screen and (min-width: 992px) {
    .service {
      flex: 0 0 calc(33.3% - 1rem);
    }
  }

  @media screen and (min-width: 1170px) {
    .service {
      display: flex;
      text-align: left;
    }

    .service-title {
      margin-bottom: 0.5rem;
    }

    .service-info {
      padding-left: 1rem;
    }

    svg {
      align-self: left;
    }
  }
`;

export default Wrapper;
