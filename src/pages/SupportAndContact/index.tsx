import React from 'react';

import { FaEnvelope } from 'react-icons/fa';
import Banner from '../../components/Banner';
import Footer from '../../components/Footer';
import Container from '../../components/Container';
import Row from '../../components/Row';
import Col from '../../components/Col';
import ContactForm from './components/ContactForm';

import {
  PageTitle,
  Title,
  SecondaryTitle,
  Subtitle,
  Card,
  ContactInfo,
} from './styles';
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
            <img src={questionsImg} alt="Ajuda e contato" />
          </Col>
          <Col sm={12} md={6}>
            <Card>
              <Title>Precisa de ajuda?</Title>
              <Subtitle>
                Entre em contato, vamos tirar suas dúvidas assim que possível!
              </Subtitle>
            </Card>
            <Card>
              <SecondaryTitle>Nossos contatos</SecondaryTitle>
              <ContactInfo>
                <FaEnvelope color="#0e346a" size={30} />
                <a href="mailto:unijobs@uniamerica.br">unijobs@uniamerica.br</a>
              </ContactInfo>
            </Card>
            <Card>
              <SecondaryTitle>Mande uma mensagem</SecondaryTitle>
              <ContactForm />
            </Card>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default SupportAndContact;
