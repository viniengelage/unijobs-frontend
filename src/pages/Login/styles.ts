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
  height: 100vh;
  background: #FFF;
  padding: 40px;
  z-index: 1;
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
  background-position: 5px 30px;
  background-repeat: no-repeat;
  height: 100vh;
  width: 60vw;
  height: calc(100vh-60px);
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
  margin-bottom: 20px;
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
export const ForgotPassword = styled(Link)`
  width: 100%;
  color: #0e346a;
  text-decoration: none;
  display: flex;
  margin: 30px auto;
  justify-content: center;
  flex: 1;
  &:hover{
    text-decoration: underline;
  }
`;

export const Button = styled.button`
  align-items: center;
  text-align: center;
  background: #51AB0E;
  height: 50px;
  border-radius: 10px;
  border: 0;
  color: #FFFFFF;
  width: 100%;
  transition: background-color 0.2s;
  font-style: normal;
  font-size: 16px;

  &:hover {
    background: ${shade(0.2, '#51AB0E')};
  }
`;

export const Select = styled.select`
  width: 200px;
  height:42px;
  padding: 8px 12px;
  margin-left: 27px;
  vertical-align:top;

  background: #FFFFFF;
  border: 1px solid #BABABA;
  box-sizing: border-box;
  border-radius: 5px;

  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 26px;
  color: #444444;
`;
