import React from 'react';

import { FiFacebook, FiTwitter, FiYoutube, FiInstagram } from 'react-icons/fi';

import { Container, Content } from './styles';

const Footer: React.FC = () => (
  <Container>
    <Content>
      <FiFacebook size={60} type="outline" />
      <FiTwitter size={60} />
      <FiYoutube size={60} />
      <FiInstagram size={60} />
    </Content>
    <p>© 2020 UniJobs - Todos os direitos reservados</p>
  </Container>
);

export default Footer;
