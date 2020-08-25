import styled from 'styled-components';
import { shade } from 'polished';

/*export const name = styled.div`
  
`;*/

export const ContainerRoot = styled.div`
  background: #FBFBFB;
  display: flex;
`;

export const Sidebar = styled.div`
  width: fit-content;
  height: 90vh;
  background: #F7F7F7;
  border: 1px solid #DDDDDD;
  padding: 30px 0 0 0; 
`;

export const A= styled.a`
font-style: normal;
font-weight: bold;
font-size: 18px;
line-height: 26px;
margin: 30px;

display: flex;
align-items: center;

color: #555555;
`;

export const FormGrid = styled.div`
  height: fit-content;
  padding:40px; 
  display:grid; 
  grid-template-columns: 1fr 1fr; 
  gap:10px;

`;

export const Formbox = styled.div`
  width: 100%;
  height: 300px;
  background: #FFFFFF;
  border: 0.8px solid #DDDDDD;
  box-shadow: 2px 2px 10px rgba(34, 34, 34, 0.05);
  border-radius: 10px;
  padding-bottom:30px;
  display:flex;
  flex-direction: column;
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

export const Label = styled.label`

font-style: normal;
font-weight: bold;
font-size: 16px;
line-height: 26px;

margin: 20px 27px 10px 27px;
display: flex;
align-items: flex-end;

color: #767676;
`;

export const Input = styled.input`
  height:42px;
  padding: 8px 12px;
  vertical-align:top;
  margin: auto 27px;

  background: #FFFFFF;
  border: 1px solid #BABABA;
  box-sizing: border-box;
  border-radius: 5px;

  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 26px;
  color: #444444;
  flex: 1;

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
  margin: 27px;
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

export const Foot = styled.div`
  height: 77px;
  background: #FFFFFF;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 15px;
  padding: 34px 0 28px 98px;

  display: flex;
  align-items: center;

  color: #555555;

`;