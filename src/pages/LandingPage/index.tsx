import React from 'react';
import { Link } from 'react-router-dom';

import { IoMdCart, IoMdBuild } from 'react-icons/io';
import Banner from '../../components/Banner';
import SliderProducts from '../../components/SliderProducts';
import HeaderSlider from '../../components/HeaderSlider';
import CategoriesCard from '../../components/CategoriesCard';
import Footer from '../../components/Footer';

import { Title, Container, Sider, Imagem } from './styles';
import aboutUnijobs from '../../assets/about-unijobs.png';
import ScrollToTopOnMount from '../../utils/ScrollToTopOnMount';

const LandingPage: React.FC = () => {
  return (
    <>
    <ScrollToTopOnMount />
      <Banner backIcon={false} />
      <HeaderSlider />
      <Container>
        <Title>
          Adicionados recentemente <Link to="/catalog/1">Ver tudo</Link>
        </Title>
        <SliderProducts />
        <Title>Categorias</Title>
        <Sider>
          <CategoriesCard
            icon={IoMdCart}
            title="Produtos"
            link="/categories/produto"
          />
          <CategoriesCard
            icon={IoMdBuild}
            title="Serviços"
            link="/categories/servico"
          />
        </Sider>
        <Title>Sobre a UniJobs</Title>
        <Imagem src={aboutUnijobs} alt="Sobre a UniJobs" />
      </Container>
      <Footer />
    </>
  );
};

export default LandingPage;
