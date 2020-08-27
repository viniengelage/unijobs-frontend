import styled from 'styled-components';

export const Container = styled.aside`
  background: #F7F7F7;
  border: 1px solid #DDDDDD;
  padding: 30px 0 0 0; 
  display: flex;
  width: 100%;
  flex-direction: column;
  min-height: calc(100vh - 300px);

  a{
  font-family: Roboto;
  text-decoration: none;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 26px;
  padding: 10px 30px;
  align-items: center;

  color: #555555;
  
    &:hover{
      color: #51AB0E; 
    }
    @media(max-width:801px){
    padding: 10px 20px;
    }
  }

  @media(max-width:801px){
    min-height: 40px;
    flex-direction: row;
    justify-content: center;
    padding: 15px 0;
  }
`;
