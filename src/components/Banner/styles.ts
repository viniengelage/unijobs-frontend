import styled from 'styled-components';

import searchIcon from '../../assets/search.svg';

export const Header = styled.header`
  display: flex;
  align-items: center;
  padding: 0 35px;
  justify-content: space-between;

  flex-wrap: wrap;
  align-content: center;
  justify-items: center;

  height: 80px;

  background: #0e346a;

  a {
    text-decoration: none;
    color: white;
    font-size: 1rem;
    margin: 0 15px;
    color: #ffffff;
    padding: 15px 25px;
    border-radius: 50px;
  }

  .menu :first-child {
    background: #65ad2f;
    box-shadow: 1px 1px 0px rgba(0, 0, 0, 0.1);
  }

  img {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  button {
    width: 200px;
    text-align: left;
    background: none;
    outline: none;
    border: 0;
    svg {
      color: #ffffff;
      stroke-width: 1px;
    }
  }

  .searchbar {
    display: flex;
    align-items: center;
    width: 50%;
  }

  .searchbar input {
    display: flex;
    align-items: center;

    margin: 0;
    height: 40px;
    width: 100%;

    padding-left: 10px;

    outline: none;
    border: 1px solid #dddddd;
    border-radius: 5px 0 0 5px;
    /* box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25); */

    font-style: italic;
    font-weight: 500;
    font-size: 12px;
    color: #d9d9d9;

    &:focus {
      color: #0e346a;
    }
  }

  .searchbar span {
    height: 40px;
    width: 60px;
    margin: 0 20px 0 0;
    border: 1px solid #dddddd;
    border-radius: 0 5px 5px 0;
    border-left: 0;
    background: #ffffff url(${searchIcon}) no-repeat center;
  }

  @media (max-width: 470px) {
    justify-content: center;
    padding: 15px 15px;
    height: fit-content;

    img {
      margin-bottom: 20px;
    }
  }
`;
