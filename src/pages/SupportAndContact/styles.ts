import styled, { css } from 'styled-components';

export const PageTitle = styled.h2`
  display: block;
  width: 100%;
  font-style: normal;
  font-weight: bold;
  font-size: 2em;
  color: #444;
  margin: 30px auto;

  @media (max-width: 450px) {
    text-align: center;
  }
`;

export const Card = styled.div`
  background-color: white;
  box-shadow: rgba(20, 20, 20, 0.15) 1px 1px 20px;
  border-radius: 20px;
  padding: 30px;
  margin-bottom: 20px;

  &:last-child {
    margin-bottom: 30px;
  }
`;

const titleCss = css`
  display: block;
  width: 100%;
  font-style: normal;
  font-weight: bold;
  margin: 0px auto 15px;
  color: #444;
`;

export const Title = styled.h2`
  ${titleCss}
  font-size: 1.6em;
`;

export const SecondaryTitle = styled.h2`
  ${titleCss}
  font-size: 1.4em;
`;

export const Subtitle = styled.h4`
  display: block;
  width: 100%;
  font-style: normal;
  font-weight: 500;
  font-size: 1em;
  color: #666;
`;

export const ContactInfo = styled.div`
  display: flex;
  align-items: center;

  a {
    text-decoration: unset;
    color: #666;
    font-weight: bold;
    font-size: 16px;
    margin-left: 20px;
  }
`;
