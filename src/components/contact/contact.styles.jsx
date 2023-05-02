import styled from "styled-components";

const Wrapper = styled.section`
  background: var(--clr-primary-5);

  .contact-info {
    color: var(--clr-white);

    p {
      color: var(--clr-primary-8);
    }
  }

  .contact-form {
    display: flex;
    max-width: 28rem;

    input,
    .btn-submit {
      padding: 0.375rem 0.75rem;
      font-size: 1rem;
      line-height: 1.5rem;
      font-weight: 300;
      letter-spacing: var(--spacing);
      background: var(--clr-white);
      text-transform: capitalize;
      border: transparent;
    }

    input {
      flex: 1 1 auto;
      color: var(--clr-grey-5);

      &::placeholder {
        color: inherit;
      }
    }

    .btn-submit {
      font-family: var(--ff-primary);
      margin-left: 0.5rem;
      background: var(--clr-primary-8);
      color: var(--clr-primary-1);
      cursor: pointer;
      transition: var(--transition);

      &:hover {
        background: var(--clr-primary-1);
        color: var(--clr-primary-8);
      }
    }
  }

  @media screen and (min-width: 992px) {
    .contact-center {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      column-gap: 2rem;

      .contact-form {
        align-self: flex-start;
        flex: 1 1 auto;
        max-width: 100%;
      }
    }
  }
`;

export default Wrapper;
