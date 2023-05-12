import styled from "styled-components";

const Wrapper = styled.footer`
  background: var(--clr-grey-1);
  padding-left: 2rem;
  padding-right: 2rem;
  text-align: center;

  .footer-links,
  .footer-icons {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin-bottom: 1.5rem;
  }

  .footer-link {
    color: var(--clr-white);
    text-transform: capitalize;
    letter-spacing: var(--spacing);
    font-size: 1rem;
    margin-right: 1rem;
    transition: var(--transition);
    &:hover {
      color: var(--clr-primary-5);
    }
  }

  .footer-icon {
    color: var(--clr-primary-8);
    font-size: 2rem;
    margin-right: 1rem;
    transition: var(--transition);
    &:hover {
      color: var(--clr-primary-5);
    }
  }

  .copyright {
    color: var(--clr-white);
    text-transform: capitalize;
    letter-spacing: var(--spacing);
  }
`;

export default Wrapper;
