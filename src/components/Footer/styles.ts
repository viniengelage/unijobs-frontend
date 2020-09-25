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
  @media only screen and (max-width: 1000px) {
    flex-direction: column;
    height: fit-content;
  }

`;

export const LogoIMG = styled.a`
    img{
      height: 150px;
    }
    @media only screen and (max-width: 1000px) {

    }
`;

export const Navigation = styled.ul`
   list-style: none;
   display: flex;
   li{
      display: flex;
      justify-content: space-between;
      padding: 10px;
     a{
       text-decoration: none;
       color: #555;
       font-weight: 500;
       transition: color 200ms;
     }
     a:hover{
       color: #65AD2F;
     }
   }
   @media only screen and (max-width: 1000px) {
      flex-direction: column;
      li{
        justify-content: center;
        align-items: center;
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
   @media only screen and (max-width: 1000px) {
      margin: 20px auto;
   }

`;
export const Copyright = styled.p`
 margin: 10px auto;
 font-style: italic;
 font-weight: 300;
 font-size: 12px;
 text-align: center;
 letter-spacing: 1px;
`;
