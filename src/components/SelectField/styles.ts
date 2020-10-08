import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction:column;
  width:100%;

  label {
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 26px;
    color: #767676;
    margin-top: 15px;
  }

  select {
    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
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
`;