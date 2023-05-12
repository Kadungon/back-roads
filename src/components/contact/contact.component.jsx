import Wrapper from "./contact.styles";

const Contact = () => {
  return (
    <Wrapper className="section" id="contact">
      <div className="section-center contact-center">
        <article className="contact-info">
          <h3>want latest tour info and updated?</h3>
          <p>sign up for newsletter and stay up to date</p>
        </article>
        <form className="contact-form">
          <input
            type="email"
            placeholder="Your Email"
            name="email"
            id="email"
          />
          <button type="submit" className="btn-submit">
            submit
          </button>
        </form>
      </div>
    </Wrapper>
  );
};

export default Contact;
