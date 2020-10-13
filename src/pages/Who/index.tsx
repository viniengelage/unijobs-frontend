import React from 'react';
import Banner from '../../components/Banner';
import SliderWho from '../../components/SliderWho';
import HeaderSlider from '../../components/HeaderSlider';
import Footer from '../../components/Footer';


import { Title, Container } from './styles';

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
  