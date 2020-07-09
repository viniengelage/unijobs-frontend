import React from 'react';
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import BigCard from '../BigCard';

const items = [
  { title: 'produto1', price: 'R$ 24,50', categorie: 'gastronomia' },
  { title: 'produto2', price: 'R$ 24,50', categorie: 'gastronomia' },
  { title: 'produto3', price: 'R$ 24,50', categorie: 'gastronomia' },
  { title: 'produto4', price: 'R$ 24,50', categorie: 'gastronomia' },
  { title: 'produto5', price: 'R$ 24,50', categorie: 'gastronomia' },
  { title: 'produto6', price: 'R$ 24,50', categorie: 'gastronomia' },
  { title: 'produto7', price: 'R$ 24,50', categorie: 'gastronomia' },
  { title: 'produto8', price: 'R$ 24,50', categorie: 'gastronomia' },
];

const Slider: React.FC = () => (
  <Carousel
    infinite
    slidesPerPage={4}
    // arrowLeft={<FiChevronLeft size={60} color="#0E346A" />}
    arrowRight={<FiChevronRight size={60} color="#0E346A" />}
    addArrowClickHandler
    breakpoints={{
      640: {
        slidesPerPage: 1,
        arrows: false,
      },
      900: {
        slidesPerPage: 2,
        arrows: false,
      },
    }}
  >
    {items.map(item => (
      <BigCard
        title={item.title}
        price={item.price}
        categorie={item.categorie}
      />
    ))}
  </Carousel>
);

export default Slider;
