import styled, { css } from 'styled-components';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  align-items: center;
  color: #444444;  
  padding: 5px 12px;
  width: 100%;
  height:40px;
  margin-top:8px;

  background: #FFFFFF;
  border: 1px solid #BABABA;
  box-sizing: border-box;
  border-radius: 5px;


  ${props =>
    props.isFocused &&
    css`
      color: #65ad2f;
      border-color: #65ad2f;
    `}

  ${props =>
    props.isFilled &&
    css`
      color: #65ad2f;
      border-color: #65ad2f;
    `}
  
  input {
    background: transparent;
    border: 0;
    width: 100%;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 26px;
  }
  input[type=number]::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
  input[type=number] {
    -moz-appearance: textfield;
    appearance: textfield;
  }
  svg {
    margin-right: 5px;
    width:20px;
    height:20px;
  }
`;

export const InputBlock = styled.div `
  margin: 20px 27px 0 27px;
  font-family: Roboto;
  
  label {
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 26px;
    color: #767676;
  }
`;