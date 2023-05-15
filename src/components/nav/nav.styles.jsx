import styled from "styled-components";

const Wrapper = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: var(--clr-white);
  box-shadow: var(--dark-shadow);
  z-index: 2;

  .nav-icons {
    display: none;
  }

  .nav-centre {
    width: 100%;
    max-width: 1170px;
    color: antiquewhite;
    margin: 0 auto;
  }

  .nav-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
  }

  .nav-toggle {
    background: transparent;
    border: transparent;
    font-size: 1.5rem;
    color: var(--clr-primary-5);
    cursor: pointer;
    transition: var(--transition);

    &:hover {
      transform: scale(1.2);
    }
  }

  .nav-link {
    display: block;
    padding: 1rem 2rem;
    text-transform: capitalize;
    letter-spacing: var(--spacing);
    transition: var(--transition);
    color: var(--clr-grey-1);
    cursor: pointer;
    font-size: 1rem;
    &:hover {
      color: var(--clr-primary-1);
      background: var(--clr-primary-8);
      padding-left: 2.25rem;
    }
  }

  .nav-links {
    height: 0;
    overflow: hidden;
    transition: var(--transition);
  }

  .show-links {
    height: 280px;
  }
`;

export default Wrapper;
