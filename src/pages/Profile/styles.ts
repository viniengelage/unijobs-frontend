import styled from 'styled-components';
import { shade } from 'polished';

/*export const name = styled.div`
  
`;*/

export const ContainerRoot = styled.div`
  margin: 0 auto;
  background: #FBFBFB;

  display: grid;
  box-sizing: border-box;
  grid-template-columns: minmax(100px, 280px) minmax(280px, 1fr);
  grid-template-areas:
    'sidebar formgrid'
    'footer footer';

  gap: 0;

  color: #3e3e3e;

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
    grid-template-areas:
      'sidebar'
      'formgrid'
      'footer';
  } 

  Footer {
    grid-area: footer;
  }

  Sidebar {
      grid-area: sidebar;
  }
`;

export const FormGrid = styled.div`
  grid-area: formgrid;
  height: fit-content;
  padding: 20px 40px 20px 40px;
  width:100%; 
  display:grid; 
  grid-template-columns: 1fr 1fr; 
  gap:15px;

  @media(max-width:1000px){
    grid-template-columns: 1fr;
  }
  @media(min-width:1280px){
    width:1150px;
  }
`;

export const Formbox = styled.div`
  width: 100%;
  background: #FFFFFF;
  border: 0.8px solid #DDDDDD;
  box-shadow: 2px 2px 10px rgba(34, 34, 34, 0.05);
  border-radius: 10px;
  padding-bottom:30px;
  display:flex;
  flex-direction: column;

  legend {
    background: #F5F6F8;
    border-bottom: 0.8px solid #DDDDDD;
    padding:25px 30px;

    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 26px;
    line-height: 26px;
    color:#555555;
  }

`;

export const Buttons = styled.button`
  width:100%;
  background: none;
  border: 0;
  text-align: left;
  padding: 0 40px;

  button{
  align-items: center;
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