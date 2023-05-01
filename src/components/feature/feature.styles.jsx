import styled from "styled-components";

const Wrapper = styled.section`
  .tour-card {
    transition: var(--transition);
    background: var(--clr-grey-10);
    box-shadow: var(--light-shadow);
    margin-bottom: 2rem;

    &:hover {
      box-shadow: var(--dark-shadow);
      transform: scale(1.02);
    }
  }

  .tour-img-container {
    position: relative;

    .tour-image {
      height: 15rem;
      object-fit: cover;
    }

    p {
      margin-bottom: 0;
      position: absolute;
      right: 0;
      bottom: 0;
      background: var(--clr-primary-8);
      color: var(--clr-primary-1);
      text-transform: capitalize;
      padding: 0.25rem 0.5rem;
    }
  }

  .tour-info {
    padding: 1.25rem 1.5rem;
  }

  .tour-footer {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    p {
      line-height: 0;
      margin-bottom: 0;
      text-transform: capitalize;
      color: var(--clr-primary-5);

      span {
        display: flex;
        align-items: center;
        column-gap: 0.5rem;
      }
    }
  }

  .tour-btn {
    text-align: center;
  }

  @media screen and (min-width: 768px) {
    .feature-center {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
    }

    .tour-card {
      flex: 0 0 calc(50% - 2rem);
    }
  }

  @media screen and (min-width: 1170px) {
    .tour-card {
      flex: 0 0 calc(33.33% - 2rem);
    }
  }
`;

export default Wrapper;
