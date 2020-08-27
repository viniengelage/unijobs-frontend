import styled from 'styled-components';
import { shade } from 'polished';

/*export const name = styled.div`
  
`;*/

export const ContainerRoot = styled.div`
  background: #FBFBFB;
  display: grid;
  justify-content:center;
  min-height: calc(100vh - 250px);
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
  border-radius: 10px;
  margin: 30px auto;

  @media(max-width: 650px) {
    width: 500px;
  }

  @media(min-width: 1281px){
    width: 925px;
  }
`;

export const Title = styled.div`
  background: #F5F6F8;
  border-bottom: 0.8px solid #DDDDDD;
  padding:30px;
  display: flex;
  justify-content:left;

  font-style: normal;
  font-weight: bold;
  font-size: 26px;
  line-height: 26px;
  color:#555555;
  
`;

export const Button = styled.button`
  align-items: center;
  text-align: center;
  background: #51AB0E;
  height: 50px;
  border-radius: 10px;
  border: 0;
  padding: 0 16px;
  color: #FFFFFF;
  width: 150px;
  margin: 20px 27px;
  transition: background-color 0.2s;

  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;

  &:hover {
    background: ${shade(0.2, '#51AB0E')};
  }
`;