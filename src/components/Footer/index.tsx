import React from 'react';
import { Link } from 'react-router-dom';
import { FiFacebook, FiTwitter, FiYoutube, FiInstagram } from 'react-icons/fi';

import { Container, Navigation, Midias, Copyright } from './styles';
import Logo from '../../assets/logo-uniamerica.png';

const Footer: React.FC = () => (
  <>
    <Container>
      <img src={Logo} alt="Uniamérica" />
      <Navigation>
        <li><Link to="/link">Ajuda e contato</Link></li>
        <li><Link to="/link">Mapa do site</Link></li>
        <li><Link to="/link">Noções básicas de como comprar</Link></li>
        <li><Link to="/link">Vender na Unijobs</Link></li>
      </Navigation>
      <Midias>
        <FiFacebook size={45} type="outline" />
        <FiTwitter size={45} />
        <FiYoutube size={45} />
        <FiInstagram size={45} />
      </Midias>
    </Container>
    <Copyright>
      © 2020 UniJobs - Todos os direitos reservados
    </Copyright>
  </>
);

export default Footer;
