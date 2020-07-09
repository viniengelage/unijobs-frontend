import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  p {
    margin: 40px auto;
    font-style: italic;
    font-weight: 300;
    font-size: 18px;
    line-height: 22px;
  }
`;
export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 250px;
  background: #eeeeee;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);

  svg {
    color: #0e346a;
    stroke-width: 1px;

    &:hover {
      color: #65ad2f;
    }

    & + svg {
      margin-left: 65px;
    }
  }
`;
