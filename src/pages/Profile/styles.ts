import styled from 'styled-components';
import { shade } from 'polished';

/*export const name = styled.div`
  
`;*/

export const ContainerRoot = styled.div`
  margin: 0 auto;
  background: #fbfbfb;

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

  Sidebar {
    grid-area: sidebar;
  }
`;

export const Foot = styled.div`
  grid-area: footer;
`;

export const FormGrid = styled.div`
  grid-area: formgrid;
  height: fit-content;
  padding: 20px;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;

  @media (max-width: 1000px) {
    grid-template-columns: 1fr;
  }
  @media (min-width: 1450px) {
    width: 1150px;
  }
`;

export const Formbox = styled.div`
  width: 100%;
  background: #ffffff;
  border: 0.8px solid #dddddd;
  box-shadow: 2px 2px 10px rgba(34, 34, 34, 0.05);
  border-radius: 10px;
  display: flex;
  flex-direction: column;

  legend {
    background: #f5f6f8;
    border-bottom: 0.8px solid #dddddd;
    padding: 25px 30px;

    font-style: normal;
    font-weight: bold;
    font-size: 1.2em;
    color: #555555;
  }
`;

export const InputBox = styled.div`
  padding: 10px 30px 35px 30px;
  font-size: 20px;

  > :last-child {
    margin-top: 10px;
  }
  > :first-child {
    margin-bottom: 10px;
  }
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

  @media (max-width: 509px) {
    button {
      width: 100%;
      margin-right: 0;
    }
  }
`;
