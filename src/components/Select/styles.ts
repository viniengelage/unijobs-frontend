import styled, { css } from 'styled-components';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
}

export const Container = styled.div<ContainerProps>`
  margin-top: 20px;

  ${props =>
    props.isFocused &&
    css`
      color: #2684ff;
      border-color: #2684ff;
      box-shadow: 0 0 0 1px #2684ff;
      border-radius: 5px;
    `}

  ${props =>
    props.isFilled &&
    css`
      color: #2684ff;
      border-color: #2684ff;
      box-shadow: 0 0 0 1px #2684ff;
      border-radius: 5px;
    `}
`;
