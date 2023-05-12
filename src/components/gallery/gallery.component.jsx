import Wrapper from "./gallery.styles";
import { FaSearch } from "react-icons/fa";
import ImageOne from "../../static/images/tour-1.jpeg";
import ImageTwo from "../../static/images/tour-2.jpeg";
import ImageThree from "../../static/images/tour-3.jpeg";
import ImageFour from "../../static/images/tour-4.jpeg";
import ImageFive from "../../static/images/tour-5.jpeg";
import ImageSix from "../../static/images/tour-6.jpeg";

const Gallery = () => {
  return (
    <Wrapper id="gallery">
      <div class="gallery-center">
        <article className="gallery-img-container">
          <img src={ImageOne} alt="" />
          <a href="#search" className="gallery-icon">
            <FaSearch />
          </a>
        </article>
        <article className="gallery-img-container">
          <img src={ImageTwo} alt="" />
          <a href="#search" className="gallery-icon">
            <FaSearch />
          </a>
        </article>
        <article className="gallery-img-container">
          <img src={ImageThree} alt="" />
          <a href="#search" className="gallery-icon">
            <FaSearch />
          </a>
        </article>
        <article className="gallery-img-container">
          <img src={ImageFour} alt="" />
          <a href="#search" className="gallery-icon">
            <FaSearch />
          </a>
        </article>
        <article className="gallery-img-container">
          <img src={ImageFive} alt="" />
          <a href="#search" className="gallery-icon">
            <FaSearch />
          </a>
        </article>
        <article className="gallery-img-container">
          <img src={ImageSix} alt="" />
          <a href="#search" className="gallery-icon">
            <FaSearch />
          </a>
        </article>
        <article className="gallery-img-container">
          <img src={ImageOne} alt="" />
          <a href="#search" className="gallery-icon">
            <FaSearch />
          </a>
        </article>
        <article className="gallery-img-container">
          <img src={ImageThree} alt="" />
          <a href="#search" className="gallery-icon">
            <FaSearch />
          </a>
        </article>
      </div>
    </Wrapper>
  );
};

export default Gallery;
