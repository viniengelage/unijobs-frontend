import styled from 'styled-components';
import { shade } from 'polished';

export const ContainerRoot = styled.div`
  background: #FBFBFB;
  display: grid;
  justify-content:center;
  grid-template-columns: minmax(100px, 280px) minmax(280px, 1fr);
  grid-template-areas:
    'sidebar formbox'
    'footer footer';
  gap: 0;

  Footer {
    grid-area: footer;
  }

  Sidebar {
    grid-area: sidebar;
  }

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
    grid-template-areas:
      'sidebar'
      'formgrid'
      'footer';
  }
`;

export const Formbox = styled.div`
  grid-area: formgrid; 
  width: 620px;
  height: fit-content;
  background: #FFFFFF;
  border: 0.8px solid #DDDDDD;
  box-shadow: 1px 1px 0px rgba(0, 0, 0, 0.1);
  border-radius: 0 0 10px 10px;
  margin: 0px auto 30px auto;

  #PrecoCat {
    display: flex;
    width:100%
  }

  #Preco {
    color: #444444;  
    padding: 5px 12px;
    height:40px;
    margin-top:49px;
    background: #FFFFFF;
    border: 1px solid #BABABA;
    box-sizing: border-box;
    border-radius: 5px;
    font-size: 14px;
  }


  @media(max-width: 650px) {
    width: 500px;
  }

  @media(min-width: 1281px){
    width: 925px;
  }
`;

export const Title = styled.div`
  width: 620px;
  background: #F5F6F8;
  border: 0.8px solid #DDDDDD;
  box-shadow: 1px 1px 0px rgba(0, 0, 0, 0.1);
  border-radius: 10px 10px 0 0;
  margin:30px auto 0 auto;
  padding:30px;
  justify-content:left;

  font-style: normal;
  font-weight: bold;
  font-size: 26px;
  line-height: 26px;
  color:#555555;
  
  @media(max-width: 650px) {
    width: 500px;
  }

  @media(min-width: 1281px){
    width: 925px;
  }
`;

export const Buttons = styled.button`
  width:100%;
  background: none;
  border: 0;
  text-align: left;
  padding: 10px 40px 0 27px;
  justify-content: flex-start;

  button{
  text-align: center;
  background: #51AB0E;
  height: 50px;
  border-radius: 10px;
  border: 0;
  padding: 0 16px;
  color: #FFFFFF;
  width: 150px;
  margin-right: 20px;
  margin-bottom:20px;
  transition: background 0.2s;

  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 19px; 
  
  &:hover {
    background: ${shade(0.2, '#51AB0E')};
  }

  &:last-child{
    background:#F5F6F7;
    border:1px solid #CCD0D5;
    color:#767676;
    &:hover {
    background: ${shade(0.2, '#CCD0D5')};
    }
  }
  }
  
`;