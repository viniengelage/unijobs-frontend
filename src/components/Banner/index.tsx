import React from 'react';
import { useHistory } from 'react-router-dom';

import { FiChevronLeft } from 'react-icons/fi';

import { Header } from './styles';
import logo from '../../assets/logo.svg';

interface BannerProps {
  backIcon: boolean;
}

const Banner: React.FC<BannerProps> = ({ backIcon }) => {
  const history = useHistory();

  function renderBackIcon(value: boolean) {
    if (value) {
      return (
        <button type="button" onClick={history.goBack}>
          <FiChevronLeft size={35} />
        </button>
      );
    }
  }

  return (
    <Header>
      {renderBackIcon(backIcon)}
      <img src={logo} alt="Logo UniJobs" />
      {/* <input placeholder="Pesquise um item..." /> */}
    </Header>
  );
};

export default Banner;
