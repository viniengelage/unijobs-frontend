import React from 'react';

import Banner from '../../components/Banner';
import Footer from '../../components/Footer';

import Container from '../../components/Container';
import Row from '../../components/Row';
import Col from '../../components/Col';

import { PageTitle, Title, Subtitle, Card } from './styles';
import ScrollToTopOnMount from '../../utils/ScrollToTopOnMount.jsx';

import questionsImg from '../../assets/questions.svg';

const SupportAndContact: React.FC = () => {
  return (
    <>
      <ScrollToTopOnMount />
      <Banner backIcon />
      <Container>
        <PageTitle>Ajuda e Contato</PageTitle>
        <Row>
          <Col sm={12} md={6}>
            <img src={questionsImg} alt="" />
          </Col>
          <Col sm={12} md={6}>
            <Card>
              <Title>Precisa de ajuda?</Title>
              <Subtitle>
                Entre em contato, vamos tirar suas dúvidas assim que possível!
              </Subtitle>
            </Card>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default SupportAndContact;
