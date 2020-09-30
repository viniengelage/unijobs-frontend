import styled from 'styled-components';
import {Link} from 'react-router-dom';
import { shade } from 'polished';

export const Container = styled.section`
  background: #FBFBFB;
  display: flex;
  justify-content: space-between;
  max-width: 1700px;
  @media only screen and (min-width: 1700px) {
    margin: 40px auto;
    border-radius: 20px;
    box-shadow: 0 0 2px -3px #000;
  }
`;

export const ContainerForm = styled.section`
  display: flex;
  flex-direction: column;
  width: 40vw;
  min-height: 100vh;
  background: #FFF;
  padding: 40px;
  z-index: 1;
  box-shadow: 0 0 6px -3px #000;
  @media only screen and (max-width: 800px) {
    width: 100vw;
  }
  @media only screen and (min-width: 1700px) {
    border-radius: 0px 20px 20px 0px;
    height: 70vh;
  }
`;

export const Lateral = styled.aside`
  background-image: url('./assets/buy.png');
  background-position-y: 50%;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: auto;
  min-height: 100vh;
  width: 60vw;
  @media only screen and (max-width: 768px) {
    display: none;
  }
  @media only screen and (min-width: 1700px) {
    background-position: 10px;
    height: 70vh;
  }
`;

export const FormLinks = styled.section`
  width: 100%;
  display: flex;
  justify-content: flex-start;
`

export const LinkForm = styled(Link)`
  display: flex;
  width: 100%;
  height: 60px;
  justify-content: center;
  align-items: center;
  color: #51AB0E;
  text-decoration: none;
  box-sizing: border-box;
  transition: background 200ms;
  &:hover{
    background: ${shade(0.04, '#FFF')};
  }
`;
