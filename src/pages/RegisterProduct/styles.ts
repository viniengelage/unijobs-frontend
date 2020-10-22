import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
}

export const ContainerRoot = styled.div`
  background: #fbfbfb;
  display: grid;
  justify-content: center;
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
  background: #ffffff;
  border: 0.8px solid #dddddd;
  box-shadow: 1px 1px 0px rgba(0, 0, 0, 0.1);
  border-radius: 0 0 10px 10px;
  padding: 15px 30px 30px 30px;
`;

export const PrecoArea = styled.div<ContainerProps>`
  width: 100%;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  height: 40px;
  margin: 20px 0 0 0;
  background: #ffffff;
  border: 1px solid #bababa;
  box-sizing: border-box;
  border-radius: 5px;
  color: #444444;
  padding: 5px 12px;
  display: flex;
  align-items: center;

  * {
    border: 0;
    margin-right: 15px;
  }

  ${props =>
    props.isFocused &&
    css`
      color: #2684ff;
      border-color: #2684ff;
      box-shadow: 0 0 0 1px #2684ff;
    `}

  ${props =>
    props.isFilled &&
    css`
      color: #2684ff;
      border-color: #2684ff;
      box-shadow: 0 0 0 1px #2684ff;
    `}
`;

export const Title = styled.h2`
  width: 100%;
  background: #f5f6f8;
  border: 0.8px solid #dddddd;
  box-shadow: 1px 1px 0px rgba(0, 0, 0, 0.1);
  border-radius: 10px 10px 0 0;
  padding: 30px;

  font-style: normal;
  font-weight: bold;
  font-size: 26px;
  line-height: 26px;
  color: #555555;
`;

export const Buttons = styled.button`
  width: 100%;
  background: none;
  border: 0;
  text-align: left;

  > :last-child {
    background: #f5f6f7;
    border: 1px solid #ccd0d5;
    color: #767676;
    &:hover {
      background: ${shade(0.2, '#CCD0D5')};
    }
  }

  @media (max-width: 650px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
`;
