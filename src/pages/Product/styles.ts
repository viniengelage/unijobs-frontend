import styled from 'styled-components';

export const Content = styled.section`
  background: #fff;
  min-height: 100vh;
`;

export const Item = styled.div`
  max-width: 1244px;
  margin: 0 auto;
  padding: 40px 15px;

  display: grid;
  box-sizing: border-box;
  grid-template-columns: minmax(100px, 600px) minmax(280px, 1fr);
  grid-template-areas:
    'img info'
    'details details';

  gap: 25px;

  color: #3e3e3e;

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
    grid-template-areas:
      'img'
      'info'
      'details';
  }
`;

export const Images = styled.div`
  grid-area: img;
  min-height: 300px;
  background: #b00e23;
  position: relative;

  p {
    position: absolute;
    text-align: center;
    width: 100%;
    top: 50%;
    color: #fff;
  }

  @media (max-width: 700px) {
    height: 315px;
  }
`;

export const InfoContact = styled.div`
  grid-area: info;
  position: relative;

  h1 {
    // color: #1253a8;
    font-weight: 500;
    font-size: 1.4em;
    font-weight: 500;
    display: block;
    margin: 10px 0;
  }

  p {
    font-style: italic;
    font-weight: 400;
    font-size: 12px;
  }

  @media (max-width: 700px) {
    height: 100%;
  }
`;

export const Description = styled.div`
  grid-area: details;

  h4 {
    position: relative;
    font-style: normal;
    text-transform: uppercase;
    font-weight: 600;
    font-size: 1em;
    color: #0e346a;

    display: block;
    margin-bottom: 40px;

    &::after {
      content: '';
      height: 3px;
      width: 100%;
      background: #0e346a;
      position: absolute;
      left: 0;
      bottom: -8px;
    }
  }

  p {
    font-size: 1em;
    line-height: 1.3em;
  }
`;

export const Buttons = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  position: absolute;
  bottom: 0;
  margin-bottom: 0;

  button {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 250px;
    padding: 15px;
    margin-right: 10px;

    border-radius: 3px;
    border: 1px solid #ddd;

    color: #fff;
    text-align: left;
    font-weight: 700;
    font-size: 1em;

    // background: #65ad2f;
    background: #8f8985;

    &:hover {
      background: #65ad2f;
      transition: background 400ms ease;
    }

    &:last-child {
      margin-right: 0;
    }

    &:last-child:hover {
      background: #1253a8;
      transition: background 400ms ease;
    }

    svg {
      margin: auto 0;
      margin-right: 10px;
      font-size: 21px;
    }
  }

  @media (max-width: 700px) {
    position: relative;
    margin-top: 20px;
    justify-content: center;

    button {
      margin-right: 0;
    }
  }
`;

export const Price = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;

  background: #f8f8f8;
  width: 100%;
  margin: 15px 0;
  margin-bottom: 120px;

  p {
    display: block;
    margin-right: 40px;
    font-style: normal;
    font-size: 15px;
    padding: 0;
  }

  span {
    color: #65ad2f;
    margin: 10px 0;
    position: relative;
    font-weight: bold;
    font-size: 1.6em;
  }

  @media (max-width: 700px) {
    margin-bottom: auto;
  }
`;
