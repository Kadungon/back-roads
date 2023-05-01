import Wrapper from "./feature.styles";
import { FaMap } from "react-icons/fa";
import ImageOne from "../../static/images/tour-1.jpeg";
import ImageTwo from "../../static/images/tour-2.jpeg";
import ImageThree from "../../static/images/tour-3.jpeg";
import ImageFour from "../../static/images/tour-4.jpeg";
const Feature = () => {
  return (
    <Wrapper className="section">
      <div className="section-title">
        <h2>
          features <span>tour</span>
        </h2>
      </div>
      <div className="section-center feature-center">
        <article className="tour-card">
          <div className="tour-img-container">
            <img src={ImageOne} className="tour-image" alt="" />
            <p className="tour-data">feburary 26th, 2020</p>
          </div>
          <div className="tour-info">
            <h4>Tibet Adventure</h4>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia
              deserunt provident est cupiditate consectetur. Ex in voluptatum
              reiciendis delectus corrupti? Lorem ipsum dolor, sit amet
              consectetur adipisicing elit. Qui, modi.
            </p>

            <div className="tour-footer">
              <p>
                <span>
                  <FaMap />
                  China
                </span>
              </p>
              <p>8</p>
              <p>from $5000</p>
            </div>
          </div>
        </article>

        <article className="tour-card">
          <div className="tour-img-container">
            <img src={ImageTwo} className="tour-image" alt="" />
            <p>may 20th, 2020</p>
          </div>
          <div className="tour-info">
            <h4>best of java</h4>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia
              deserunt provident est cupiditate consectetur. Ex in voluptatum
              reiciendis delectus corrupti? Lorem ipsum dolor, sit amet
              consectetur adipisicing elit. Qui, modi.
            </p>

            <div className="tour-footer">
              <p>
                <span>
                  <FaMap />
                  indonesia
                </span>
              </p>
              <p>6 days</p>
              <p>from $2400</p>
            </div>
          </div>
        </article>
        <article className="tour-card">
          <div className="tour-img-container">
            <img src={ImageThree} className="tour-image" alt="" />
            <p>november 10th, 2020</p>
          </div>
          <div className="tour-info">
            <h4>explore hong Kong</h4>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia
              deserunt provident est cupiditate consectetur. Ex in voluptatum
              reiciendis delectus corrupti? Lorem ipsum dolor, sit amet
              consectetur adipisicing elit. Qui, modi.
            </p>

            <div className="tour-footer">
              <p>
                <span>
                  <FaMap />
                  hong kong
                </span>
              </p>
              <p>8 days</p>
              <p>from $5400</p>
            </div>
          </div>
        </article>
        <article className="tour-card">
          <div className="tour-img-container">
            <img src={ImageFour} className="tour-image" alt="" />
            <p>december 12th, 2020</p>
          </div>
          <div className="tour-info">
            <h4>Kenya Highlights</h4>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia
              deserunt provident est cupiditate consectetur. Ex in voluptatum
              reiciendis delectus corrupti? Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Officia, facere.
            </p>

            <div className="tour-footer">
              <p>
                <span>
                  <FaMap />
                  kenya
                </span>
              </p>
              <p>10 days</p>
              <p>from $1400</p>
            </div>
          </div>
        </article>
      </div>
      <div className="tour-btn">
        <a href="#all" className="btn">
          all tour
        </a>
      </div>
    </Wrapper>
  );
};

export default Feature;
