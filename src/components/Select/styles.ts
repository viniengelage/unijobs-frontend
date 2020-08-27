import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction:column;
  width:250px;
  margin: 20px 27px 0 10px;
  font-family: Roboto;

  label {
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 26px;
    color: #767676;
  }

  select {
    color: #444444;  
    padding: 5px 12px;
    height:40px;
    width:100%;
    margin-top:8px;
    background: #FFFFFF;
    border: 1px solid #BABABA;
    box-sizing: border-box;
    border-radius: 5px;
    font-size: 14px;
  }

  @media(max-width: 670px) {
    width:160px;
  }
`;