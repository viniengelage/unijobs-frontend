import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1244px;
  margin: 0 auto;
  padding: 15px;
  // background: #EBEBEB;
`;

export const Title = styled.h2`
  display: block;
  width: 100%;
  font-style: normal;
  font-weight: bold;
  font-size: 1.4em;
  line-height: 49px;
  color: #444;
  margin: 20px auto;
  a {
    font-style: italic;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    color: #1259c3;
    text-decoration: none;
    margin-left: 12px;
  }
  a:hover {
    color: #65ad2f;
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
