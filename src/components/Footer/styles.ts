import styled from 'styled-components';

export const Container = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 150px;
  background: #eeeeee;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
  width: 100%;
  padding-right: 20px;
  img{
    height: 80%;
  }
`;

export const Navigation = styled.ul`
   list-style: none;
   display: flex;
   li{
      display: flex;
      justify-content: space-between;
      padding: 20px;
     a{
       text-decoration: none;
       color: #555;
       font-weight: 500;
     }
     a:hover{
       color: #65AD2F;
     }
   }
`;

export const Midias = styled.section`
   display: flex;
   align-items: center;
   justify-content: space-around;
   svg {
     color: #0e346a;
     stroke-width: 1px;
     transition: color 200ms;
     margin: 10px;

     &:hover {
       color: #65ad2f;
       cursor: pointer;
     }


   }

`;
export const Copyright = styled.p`
 margin: 40px auto;
 font-style: italic;
 font-weight: 300;
 font-size: 18px;
 line-height: 22px;
 text-align: center;
`;
