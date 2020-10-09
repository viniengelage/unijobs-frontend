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
  color: #444;
  margin: 30px auto;
  text-align: center;

  a {
    font-style: italic;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    color: #1259c3;
    text-decoration: none;
    margin-left: 12px;

    &:hover {
      color: #65ad2f;
    }

  }

  @media (max-width: 450px) {
    text-align: center;

    a {
      display: block;
      margin: 12px 0 0;
    }
  }
`;