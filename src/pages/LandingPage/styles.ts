import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1244px;
  margin: 0 auto;
  padding: 15px;
`;

export const Title = styled.h2`
  font-style: normal;
  font-weight: bold;
  font-size: 26px;
  line-height: 49px;
  color: #0e346a;
  margin: 20px auto;
  a {
    font-style: italic;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    color: #65ad2f;
    text-decoration: none;
  }
`;

export const Sider = styled.div`
  display: flex;
`;

export const Imagem = styled.img`
  max-width: 1280px;
  max-height: 600px;
  border-radius: 3px;
`;
