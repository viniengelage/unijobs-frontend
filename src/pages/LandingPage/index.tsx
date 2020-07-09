import React from 'react';
import { Link } from 'react-router-dom';

import { IoMdCart, IoMdBuild } from 'react-icons/io';
import Banner from '../../components/Banner';
import Slider from '../../components/Slider';
import HeaderSlider from '../../components/HeaderSlider';
import CategoriesCard from '../../components/CategoriesCard';
import Footer from '../../components/Footer';

import { Title, Container, Sider, Imagem } from './styles';
import aboutUnijobs from '../../assets/about-unijobs.png';

const LandingPage: React.FC = () => {
  return (
    <>
      <Banner />
      <HeaderSlider />
      <Container>
        <Title>
          Adicionados recentemente <Link to="/produtos">ver tudo</Link>
        </Title>
        <Slider />
        <Title>Categorias</Title>
        <Sider>
          <CategoriesCard icon={IoMdCart} title="Produtos" />
          <CategoriesCard icon={IoMdBuild} title="Serviços" />
        </Sider>
        <Title>Sobre a UniJobs</Title>
        <Imagem src={aboutUnijobs} alt="Sobre a UniJobs" />
      </Container>
      <Footer />
    </>
  );
};

export default LandingPage;
