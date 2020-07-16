import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

import { FiChevronRight } from 'react-icons/fi';
import { Container, Content } from './styles';
import api from '../../services/api';


interface Product {
  _id: string;
  title: string;
  description: string;
  price: string;
  type: string;
  image: string[];
}

const Slider: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    api.get('/items/?perPage=8&page=1').then(response => {
      setProducts(response.data.docs);
    });
  }, []);

  return (
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
      {products.map(product => (
        <Container>
          <Content>
            <Link to={`/item/${product._id}`} key={product._id}>
              <img src={product.image[1]} alt="Produto" />
              <h1>{product.title}</h1>
              <strong>R$ {product.price}</strong>
              <span>{product.type}</span>
            </Link>
          </Content>
        </Container>
      ))}
    </Carousel>
  );
};

export default Slider;
