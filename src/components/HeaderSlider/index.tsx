import React from 'react';
import Flickity from 'react-flickity-component';
import './styles.css';

import imgOne from '../../assets/banner-1.png';
import imgTwo from '../../assets/banner-2.png';
import imgThree from '../../assets/banner-3.png';
import imgFour from '../../assets/banner-4.png';

const flickityOptions = {
  initialIndex: 0,
  prevNextButtons: true,
  pageDots: false,
  wrapAround: true,
};

const Slider: React.FC = () => (
  <Flickity
    className="carousel" // default ''
    elementType="div" // default 'div'
    options={flickityOptions} // takes flickity options {}
    disableImagesLoaded={false} // default false
    reloadOnUpdate // default false
    static // default false
  >
    <img src={imgOne} alt="Unijobs" />
    <img src={imgTwo} alt="Unijobs" />
    <img src={imgThree} alt="Unijobs" />
    <img src={imgFour} alt="Unijobs" />
  </Flickity>
);

export default Slider;
