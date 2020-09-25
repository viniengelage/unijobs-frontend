import React from 'react';
import { Link } from 'react-router-dom';
import { FiFacebook, FiTwitter, FiYoutube, FiInstagram } from 'react-icons/fi';

import { Container, LogoIMG, Navigation, Midias, Copyright } from './styles';
import Logo from '../../assets/logo-uniamerica.png';

const Footer: React.FC = () => (
  <>
    <Container>
      <LogoIMG href="http://www.uniamerica.br/" target="_blank" rel="noopener noreferrer">
        <img src={Logo} alt="Uniamérica" />
      </LogoIMG>
      <Navigation>
        <li><Link to="/link">Ajuda e contato</Link></li>
        <li><Link to="/link">Mapa do site</Link></li>
        <li><Link to="/link">Noções básicas de como comprar</Link></li>
        <li><Link to="/link">Vender na Unijobs</Link></li>
      </Navigation>
      <Midias>
        <a href="https://www.facebook.com/UniAmericaUA" target="_blank" rel="noopener noreferrer">
          <FiFacebook size={45} type="outline" />
        </a>
        <a href="https://twitter.com/uniamerica" target="_blank" rel="noopener noreferrer">
          <FiTwitter size={45} />
        </a>
        <a href="https://www.youtube.com/user/uniamerica" target="_blank" rel="noopener noreferrer">
          <FiYoutube size={45} />
        </a>
        <a href="https://www.instagram.com/uniamerica.br/" target="_blank" rel="noopener noreferrer">
          <FiInstagram size={45} />
        </a>
      </Midias>
    </Container>
    <Copyright>
      © 2020 UniJobs - Todos os direitos reservados
    </Copyright>
  </>
);

export default Footer;
