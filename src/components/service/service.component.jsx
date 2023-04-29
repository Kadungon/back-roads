import Wrapper from "./service.styles";
import { FaWallet, FaSocks, FaTree } from "react-icons/fa";

const Service = () => {
  return (
    <Wrapper className="section" id="services">
      <div className="section-title">
        <h2>
          our <span>services</span>
        </h2>
      </div>
      <div className="section-center service-center">
        <article className="service">
          <FaWallet />
          <div className="service-info">
            <h4 className="service-title">saving money</h4>
            <p className="service-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
              rem cumque possimus amet fugiat molestiae.
            </p>
          </div>
        </article>
        <article className="service">
          <FaTree />
          <div className="service-info">
            <h4 className="service-title">endless biking</h4>
            <p className="service-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
              rem cumque possimus amet fugiat molestiae.
            </p>
          </div>
        </article>
        <article className="service">
          <FaSocks />
          <div className="service-info">
            <h4 className="service-title">amazing comfort</h4>
            <p className="service-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
              rem cumque possimus amet fugiat molestiae.
            </p>
          </div>
        </article>
      </div>
    </Wrapper>
  );
};

export default Service;
