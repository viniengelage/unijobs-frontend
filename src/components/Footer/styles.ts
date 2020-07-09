import styled from 'styled-components';
import { container } from '../../styles/global';

export const Container = container;

export const FooterContent = styled.footer`
  width: 100%;
`;

export const SocialMedia = styled.div`
  background: #eee;
  width: 100%;
  border-top: 1px solid #c1c2c3;
  border-bottom: 1px solid #c1c2c3;

  text-align: center;
  padding: 60px 0;

  a {
    font-size: 2.5em;
    color: #0e346a;
    transition: color 300ms ease;
    margin: 0 15px;
  }

  a:hover {
    font-size: 2.5em;
    color: #6aad2f;
  }
`;

export const Copyright = styled.div`
  padding: 20px;
  background: #e5e5e5;
  font-size: 12px;
  text-align: center;
`;
