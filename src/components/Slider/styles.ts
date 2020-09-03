import styled from 'styled-components';

export const Container = styled.div`
  margin: 20px auto;
  display: flex;
`;

export const Content = styled.div`
  background: #ffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  height: 380px;
  width: 270px;
  border-radius: 3px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  transition: transform 0.2s;
  position: relative;

  &:hover {
    transform: translateY(-10px);
  }

  &::before {
    content: '';
    background: #0e346a;
    position: absolute;
    top: 0;
    width: 100%;
    height: 10px;
    border-radius: 3px 3px 0px 0px;
  }

  img {
    margin-top: 5px;
    width: 200px;
    height: 200px;
    border-radius: 3px;
  }
  a {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    text-decoration: none;

    h1 {
      text-align: left;
      margin-top: 10px;
      font-weight: 500;
      font-size: 18px;
      line-height: 22px;
      color: #0e346a;
      text-transform: capitalize;
    }
    strong {
      text-align: left;
      margin-top: 5px;
      font-weight: 600;
      font-size: 24px;
      line-height: 29px;
      color: #0e346a;
      text-transform: capitalize;
    }
    span {
      text-align: left;
      font-style: italic;
      font-weight: 500;
      font-size: 14px;
      line-height: 22px;
      text-transform: capitalize;
      color: #0e346a;
    }
  }
`;

