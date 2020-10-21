import styled from 'styled-components';
import { shade } from 'polished';

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

export const Flex = styled.div`
  display: flex;
  width: 100%;

  > * {
    width: 50%;
  }

  > :last-child {
    margin: 0 0 0 20px;
  }

  @media (max-width: 880px) {
    flex-direction: column;
    > * {
      width: 100%;
    }
    > :last-child {
      margin: 0;
    }
  }
`;

export const PrecoArea = styled.div`
  display: flex;
  align-items: flex-end;
  width: 50%;

  @media (max-width: 880px) {
    flex-direction: column;
    width: 100%;
  }
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
