import React from 'react';
import Flickity from 'react-flickity-component';
import './styles.css';

import imgOne from '../../assets/trends.svg';

const flickityOptions = {
  initialIndex: 0,
  prevNextButtons: true,
  pageDots: false,
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
    <img src={imgOne} alt="Trends" />
    <img src={imgOne} alt="Trends" />
    <img src={imgOne} alt="Trends" />
  </Flickity>
);

export default Slider;
