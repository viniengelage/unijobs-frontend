import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Content } from './styles';

import productImage from '../../assets/image.jpeg';

type ProductProps = {
  title: string;
  price: string;
  categorie: string;
};

const BigCard: React.FC<ProductProps> = ({ title, price, categorie }) => {
  return (
    <Container>
      <Content>
        <Link to="/produto">
          <img src={productImage} alt="Produto" />
          <h1>{title}</h1>
          <strong>{price}</strong>
          <span>{categorie}</span>
        </Link>
      </Content>
    </Container>
  );
};

export default BigCard;
