import styled, { css } from 'styled-components';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  align-items: center;

  width: 350px;
  height:40px;
  border:2px solid #0e346a;
  border-radius: 2px;
  color: #0e346a;

  & + div {
    margin-top: 8px;
  }

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
    color: #0e346a;

    &::placeholder {
      color:  #0e346a;
    }
  }
  input[type=number]::-webkit-inner-spin-button {
    -webkit-appearance: none;

  }
  input[type=number] {
    -moz-appearance: textfield;
    appearance: textfield;

  }
  svg {
    margin-right: 10px;
    margin-left: 10px;
  }
`;
