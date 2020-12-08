import React from 'react';
import Banner from '../../components/Banner';
import SliderWho from '../../components/SliderWho';
import HeaderSlider from '../../components/HeaderSlider';
import Footer from '../../components/Footer';
import ScrollToTopOnMount from '../../utils/ScrollToTopOnMount';

import { PageTitle, Title, Text, Container } from './styles';

const Who: React.FC = () => {
  return (
    <>
      <ScrollToTopOnMount />
      <Banner backIcon={false} />
      <HeaderSlider />
      <Container>
        <PageTitle>Quem somos</PageTitle>
        <Text>
          Somos um grupo de alunos do curso de engenharia de software e criamos
          a plataforma UniJobs com objetivo de apoiar a comunidade UniAmérica na
          geração de renda por meio da divulgação de produtos ou serviços
          ofertados por alunos dos mais diferentes cursos.
        </Text>
        <Title>Nosso time</Title>
        <SliderWho />
      </Container>
      <Footer />
    </>
  );
};

export default Who;
