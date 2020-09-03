import styled from 'styled-components';

import searchIcon from '../../../assets/search.svg';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;

  flex-wrap: wrap;
  align-content: center;
  justify-items: center;

  height: 60px;

  background: #0e346a;

  img {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  button {
    position: absolute;
    left: 2%;
    background: none;
    outline: none;
    border: 0;
    svg {
      color: #ffffff;
      stroke-width: 1px;
    }
  }

  input {
    display: flex;
    align-items: center;

    margin-right: 100px;
    background: #ffffff url(${searchIcon}) no-repeat 320px center;
    height: 30px;
    width: 350px;

    padding-left: 10px;

    outline: none;
    border: none;
    border-radius: 5px;
    /* box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25); */

    font-style: italic;
    font-weight: 500;
    font-size: 12px;
    color: #d9d9d9;

    &:focus {
      color: #0e346a;
    }
  }
`;
