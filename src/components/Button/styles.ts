import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  text-align: center;
  background: #51AB0E;
  height: 50px;
  border-radius: 10px;
  border: 0;
  padding: 0 16px;
  color: #FFFFFF;
  width: 150px;
  margin-right: 20px;
  margin-top: 15px;
  transition: background 0.2s;

  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 19px; 
  
  &:hover {
    background: ${shade(0.2, '#51AB0E')};
  }

  @media(max-width:509px){
    width: 100%;
    margin-right: 0;
  }
`;
