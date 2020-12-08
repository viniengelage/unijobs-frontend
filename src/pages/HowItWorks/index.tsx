import React from 'react';
import { Link } from 'react-router-dom';

import Banner from '../../components/Banner';
import Footer from '../../components/Footer';
import Container from '../../components/Container';
import Row from '../../components/Row';
import Col from '../../components/Col';

import buyerSearch from '../../assets/buyer-search.svg';
import sellerRegister from '../../assets/seller-register.svg';

import { PageTitle, Card, Title, Text, Image, Support } from './styles';
import ScrollToTopOnMount from '../../utils/ScrollToTopOnMount.jsx';

const HowItWorks: React.FC = () => {
  return (
    <>
      <ScrollToTopOnMount />
      <Banner backIcon />
      <Container>
        <PageTitle>Como funciona a Unijobs</PageTitle>
        <Row>
          <Col sm={12} md={12} lg={6}>
            <Card>
              <Image
                src={sellerRegister}
                alt="cadastrando produtos e serviços"
              />
              <Title style={{marginTop: '-18px'}}>Cadastrando produtos e serviços</Title>
              <Text style={{marginBottom: 23 }}>
              Para você que é aluno da UniAmérica basta adicionar as informações sobre o seu produto ou serviço e uma forma de contato.
              </Text>
            </Card>
          </Col>
          <Col sm={12} md={12} lg={6}>
            <Card>
              <Image src={buyerSearch} alt="busca de produtos e serviços" />
              <Title>Busca de produtos e serviços</Title>
              <Text>
                Agora se você quer ajudar e adquirir produtos ou serviços produzidos por essa galera supercompetente entre na nossa plataforma e escolha entre os mais diversos itens o que desejar.
              </Text>
            </Card>
          </Col>
        </Row>
        <Support>
          <Title color="#0e346a">Tem alguma dúvida?</Title>
          <Link to="/ajuda-e-contato">Entre em contato conosco</Link>
        </Support>
      </Container>
      <Footer />
    </>
  );
};

export default HowItWorks;
