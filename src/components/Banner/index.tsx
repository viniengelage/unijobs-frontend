import React from 'react';

import { Header } from './styles';
import logo from '../../assets/logo.svg';

const Banner: React.FC = () => {
  return (
    <Header>
      <img src={logo} alt="Logo UniJobs" />
      <input placeholder="Pesquise um item..." />
    </Header>
  );
};

export default Banner;
