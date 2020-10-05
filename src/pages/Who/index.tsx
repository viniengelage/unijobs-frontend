import React from 'react';
import { Link } from 'react-router-dom';
import Banner from '../../components/Banner/Logout';
import SliderWho from '../../components/SliderWho';
import HeaderSlider from '../../components/HeaderSlider';
import CategoriesCard from '../../components/CategoriesCard';
import Footer from '../../components/Footer';


import { Title, Container, Sider, Imagem } from './styles';

const Who: React.FC = () => {
    return (
      <>
        <Banner backIcon={false} />
        <HeaderSlider />
        <Container>
          <Title>
            Quem Somos?
          </Title>
          <SliderWho />
        </Container>
        <Footer />
      </>
    );
  };
  
  export default Who;
  