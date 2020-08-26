import styled from 'styled-components';
import { shade } from 'polished';

/*export const name = styled.div`
  
`;*/

export const ContainerRoot = styled.div`
  background: #FBFBFB;
  display: flex;
  justify-content:center;
  padding: 50px;

`;

export const Formbox = styled.div`
  width: 925px;
  height: fit-content;
  background: #FFFFFF;
  border: 0.8px solid #DDDDDD;
  box-shadow: 1px 1px 0px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  padding-bottom:30px;

  @media(max-width: 950px) {
  width: 650px;
  }

  @media(max-width: 670px) {
  width: 480px;
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
  width: 871px;
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
    
  input[type=number]::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
  input[type=number] {
    -moz-appearance: textfield;
    appearance: textfield;
  }
  @media(max-width: 950px) {
  width: 590px;
  }
  @media(max-width: 670px) {
  width: 425px;
  }
`;

export const TextArea = styled.textarea`
  width: 871px;
  height:250px;
  resize: none;
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
  
  @media(max-width: 950px) {
  width: 590px;
  }
  @media(max-width: 670px) {
  width: 425px;
  }
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