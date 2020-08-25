import styled from 'styled-components';

export const Content = styled.section`
  background: #fff;
  height: 100vh;
`;

export const Item = styled.div`
  max-width: 1244px;
  margin: 0 auto;
  padding: 40px 15px;

  display: grid;
  box-sizing: border-box;
  grid-template-columns: minmax(100px, 650px) minmax(280px, 1fr);
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
  position: relative;

  img {
    width: 100%;
    height: 300px;
    object-fit: cover;
  }
`;

export const InfoContact = styled.div`
  grid-area: info;
  position: relative;

  h1 {
    font-weight: 500;
    font-size: 1.4em;
    font-weight: 700;
    display: block;
    margin: 10px 0;
  }

  p {
    font-style: italic;
    font-weight: 400;
    font-size: 12px;
    color: #888
  }

  @media (max-width: 700px) {
    height: 100%;
    p {
      text-align: center;
    }
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
  margin-bottom: 4px;

  a {
    display: flex;
    align-items: center;
    justify-content: center;

    flex: 1;
    padding: 15px;

    border-radius: 3px;
    border: 1px solid #ddd;

    color: #fff;
    text-align: left;
    font-weight: 700;
    font-size: 1em;
    text-decoration: none;

    background: #65ad2f;

    &:hover {
      opacity: .9;
      transition: opacity 400ms ease;
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
  // margin-bottom: 120px;

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
