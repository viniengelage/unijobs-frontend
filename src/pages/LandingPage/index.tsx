import React from 'react';
import { Link } from 'react-router-dom';
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';

import {
  IoMdCart,
  IoMdBuild,
  IoIosSchool,
  IoIosShirt,
  IoIosHourglass,
  IoIosIceCream,
  IoIosHeadset,
  IoIosBulb,
} from 'react-icons/io';
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
        <Title>Navegar por tipo de item</Title>
        <Sider>
          <CategoriesCard
            icon={IoMdCart}
            title="Produtos"
            link="/categories/products/1"
          />
          <CategoriesCard
            icon={IoMdBuild}
            title="Serviços"
            link="/categories/services/1"
          />
        </Sider>

        <Title>Categorias</Title>
        <Carousel
          infinite
          slidesPerPage={4}
          arrowLeft={<FiChevronLeft size={60} color="#0E346A" />}
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
          <CategoriesCard
            icon={IoIosIceCream}
            title="Gastronomia"
            link="/categories/products/gastronomia/1"
          />
          <CategoriesCard
            icon={IoIosSchool}
            title="Aulas particulares"
            link="/categories/services/aula-particular/1"
          />
          <CategoriesCard
            icon={IoIosShirt}
            title="Roupas"
            link="/categories/products/roupas-e-calcados/1"
          />
          <CategoriesCard
            icon={IoIosHeadset}
            title="Acessórios"
            link="/categories/products/acessorios/1"
          />
          <CategoriesCard
            icon={IoIosBulb}
            title="Roupas"
            link="/categories/products/artesanatos/1"
          />
          <CategoriesCard
            icon={IoIosHourglass}
            title="Outros"
            link="/catalog/1"
          />
        </Carousel>
        <Title>Sobre a UniJobs</Title>
        <Imagem src={aboutUnijobs} alt="Sobre a UniJobs" />
      </Container>
      <Footer />
    </>
  );
};

export default LandingPage;
