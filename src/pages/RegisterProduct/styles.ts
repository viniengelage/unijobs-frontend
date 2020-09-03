import styled from 'styled-components';
import { shade } from 'polished';

export const ContainerRoot = styled.div`
  background: #FBFBFB;
  display: grid;
  justify-content:center;
  grid-template-columns: minmax(100px, 260px) minmax(280px, 1fr);
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

export const Formarea = styled.div`
    max-width: 925px;
    margin: 0 auto;
    box-sizing: border-box;
    width: 100%;
    padding: 20px;
`;

export const Formbox = styled.div`
  grid-area: formgrid; 
  width: 100%;
  height: fit-content;
  background: #FFFFFF;
  border: 0.8px solid #DDDDDD;
  box-shadow: 1px 1px 0px rgba(0, 0, 0, 0.1);
  border-radius: 0 0 10px 10px;
  padding: 15px 30px 30px 30px;

  #Preco {
    max-width: 250px;
    width: 100%;
    color: #444444;  
    padding: 5px 12px;
    height:40px;
    background: #FFFFFF;
    border: 1px solid #BABABA;
    box-sizing: border-box;
    border-radius: 5px;
    font-size: 14px;
    text-align: right;
    margin-left: 10px;

    @media(max-width:509px){
      margin: 0;
      max-width: 100%;
      margin-top:10px;
    }
  }
`;

export const Flex = styled.div`
  display: flex;
  width: 100%;

  @media(max-width:880px){
   flex-direction: column; 
  }
`;

export const CategoriaArea = styled.div`
  margin: 0 0 0 20px;
  width: 50%;

  @media(max-width:880px){
  margin: 0;
  width: 100%; 
  }
`;

export const InputArea = styled.div`
  width: 100%;
`;

export const PrecoArea = styled.div`
  display: flex;
  align-items: flex-end;

  @media(max-width:509px){
      flex-wrap: wrap;
    }
`;

export const Title = styled.h2`
  width: 100%;
  background: #F5F6F8;
  border: 0.8px solid #DDDDDD;
  box-shadow: 1px 1px 0px rgba(0, 0, 0, 0.1);
  border-radius: 10px 10px 0 0;
  padding:30px;

  font-style: normal;
  font-weight: bold;
  font-size: 26px;
  line-height: 26px;
  color:#555555;
`;

export const Buttons = styled.button`
  width:100%;
  background: none;
  border: 0;
  text-align: left;

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
  margin-top: 10px;
  transition: background 0.2s;

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
  
  @media(max-width:650px){
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  @media(max-width:509px){
    button {
      width: 100%;
      margin-right: 0;
    }
  }
`;