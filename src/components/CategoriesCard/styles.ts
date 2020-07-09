import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  & + div {
    margin-left: 15px;
  }
`;
export const Content = styled.div`
  a {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 200px;
    height: 200px;
    background: #ffffff;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 3px;
    transition: transform 0.2s;

    &:hover {
      transform: translateY(-10px);
    }

    text-decoration: none;
    svg {
      color: #65ad2f;
    }
    span {
      margin-top: 15px;
      font-style: italic;
      font-weight: 500;
      font-size: 20px;
      line-height: 29px;
      color: #65ad2f;
    }
  }
`;
