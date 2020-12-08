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
  padding: 40px;
  margin-bottom: 20px;
  transition: all .3s ease-in-out;

  &:last-child {
    margin-bottom: 30px;
  }

  &:hover {
  transform: scale(1.03);
    box-shadow: rgba(20, 20, 20, 0.4) 3px 6px 20px;
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
  ${props => props.color && `color: ${props.color}`};
`;

export const Text = styled.p`
  color: #666;
  line-height: 1.5;
`;

export const Image = styled.img`
  max-height: 350px;
  width: 100%;
`;

export const Support = styled.div`
  margin: 30px 0;
  text-align: center;

  a {
    text-decoration: none;
    color: #555;
    font-weight: 500;
    transition: color 200ms;
  }

  a:hover {
    color: #65AD2F;
  }
`;

export const SupportTitle = styled.h3`
  ${titleCss}
  font-size: 1.4em;
`
