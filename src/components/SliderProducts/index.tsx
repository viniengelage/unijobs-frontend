import React, { useState, useEffect } from 'react';
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { IItem } from '../../services/types';

import {
  ProductItem,
  ProductImage,
  ProductContent,
  ProductHeader,
  ProductCategory,
  ProductTitle,
  ProductDescription,
  ProductFooter,
  ProductLink,
  ProductPrice,
} from './styles';
import api from '../../services/api';

const Slider: React.FC = () => {
  const [products, setProducts] = useState<IItem[]>([]);

  useEffect(() => {
    api.get('/items/1').then(response => {
      setProducts(response.data.data);
    });
  }, []);

  return (
    <Carousel
      infinite
      slidesPerPage={2}
      arrowLeft={<FiChevronLeft size={60} color="#0E346A" />}
      arrowRight={<FiChevronRight size={60} color="#0E346A" />}
      addArrowClickHandler
      breakpoints={{
        900: {
          slidesPerPage: 1,
          arrows: false,
        },
      }}
    >
      {products.map(product => (
        <ProductItem key={product.id}>
          <ProductImage
            src={`http://200.208.73.149:3333/api/files/${product.thumbnail_id}`}
            alt={product.title}
          />
          <ProductContent>
            <ProductHeader>
              <ProductCategory>{product.type}</ProductCategory>
              <ProductTitle>{product.title}</ProductTitle>
            </ProductHeader>
            <ProductDescription>{product.description}</ProductDescription>
            <ProductFooter>
              <ProductLink to={`/item/${product.id}`}>
                + informações
              </ProductLink>
              <ProductPrice>R$ {product.price}</ProductPrice>
            </ProductFooter>
          </ProductContent>
        </ProductItem>
      ))}
    </Carousel>
  );
};

export default Slider;
