import styled from 'styled-components';

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
`;

export const Title = styled.h2`
  display: block;
  width: 100%;
  font-style: normal;
  font-weight: bold;
  font-size: 1.6em;
  color: #444;
  margin: 0px auto 15px;
`;

export const Subtitle = styled.h4`
  display: block;
  width: 100%;
  font-style: normal;
  font-weight: 500;
  font-size: 1em;
  color: #666;
  margin: 0px auto 30px;
`;

export const ImageWrapper = styled.img`
  width: 100%;
  border-radius: 3px;
  margin-bottom: 30px;

  @media (max-width: 400px) {
    height: 240px;
    object-fit: cover;
    object-position: 0 0;
  }
`;
