import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  margin: 20px auto;
  justify-content: center;
  width: 80%;
  flex-direction: column;
`;

export const Content = styled.div`
  margin-left: 20px;
  margin-bottom: 20px;
  background: #ffff;
  display: flex;
  height: 200px;
  width: 100%;
  border-radius: 3px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  transition: transform 0.2s;

  > :first-child {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding-right: 30px;
  }

  &:hover {
    transform: translateY(-10px);
  }

  img {
    width: 200px;
    height: 200px;
  }
  a {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    text-decoration: none;

    strong {
      width: 100%;
      max-width: 200px;
      text-align: center;
      margin-top: 5px;
      font-weight: 600;
      font-size: 24px;
      line-height: 29px;
      color: #0e346a;
      text-transform: capitalize;
    }
  }
`;

export const Informations = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: space-between;
  height: 100%;
  padding: 30px;

  span {
    text-align: left;
    font-style: italic;
    font-weight: 500;
    font-size: 14px;
    line-height: 22px;
    text-transform: capitalize;
    color: #333333;
    flex: 1;
  }

  h1 {
    text-align: left;
    margin-top: 5px;
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;
    color: #0e346a;
    text-transform: capitalize;
    flex: 1;
  }
  p {
    margin-top: 10px;
    flex: 4;
    color: #333333;
  }
`;

export const Pages = styled.div`
  display: flex;
  justify-content: center;

  button{
    background: none;
    border: none;
  }

  svg{
    color: #0e346a;

    &:hover{
      color: #65ad2f;
    }
  }
`;
