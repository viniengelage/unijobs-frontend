import React from 'react';
import { FiFacebook, FiYoutube, FiTwitter, FiInstagram } from 'react-icons/fi';

import { FooterContent, SocialMedia, Copyright } from './styles';

const Footer: React.FC = () => {
  return (
    <FooterContent>
      <SocialMedia>
        <a href="#/" target="_blank">
          <FiFacebook strokeWidth="1" />
        </a>
        <a href="#/" target="_blank">
          <FiTwitter strokeWidth="1" />
        </a>
        <a href="#/" target="_blank">
          <FiYoutube strokeWidth="1" />
        </a>
        <a href="#/" target="_blank">
          <FiInstagram strokeWidth="1" />
        </a>
      </SocialMedia>
      <Copyright>@ 2020 UniJobs - Todos os direitos reservados</Copyright>
    </FooterContent>
  );
};

export default Footer;
