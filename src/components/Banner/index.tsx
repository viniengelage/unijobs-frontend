import React from 'react';
import { useHistory, Link } from 'react-router-dom';

import { FiChevronLeft } from 'react-icons/fi';

import { Header } from './styles';
import logo from '../../assets/logo.svg';
import { useAuth } from '../../hooks/auth';

interface BannerProps {
  backIcon: boolean;
}

const Banner: React.FC<BannerProps> = ({ backIcon }) => {
  const history = useHistory();
  const { signOut } = useAuth();

  function renderBackIcon(value: boolean) {
    if (value) {
      return (
        <button type="button" onClick={history.goBack}>
          <FiChevronLeft size={35} />
        </button>
      );
    }
  }

  const handleClick = () => {
    signOut();
  };

  return (
    <Header>
      {renderBackIcon(backIcon)}
      <Link to="/">
        <img src={logo} alt="Logo UniJobs" />
      </Link>
      {/* <div className="searchbar">
        <input placeholder="Pesquise um item..." />
        <span />
      </div> */}
      {useAuth() ? (
        <div className="menu">
          <a href="/RegisterUser">Anunciar</a>
          <a href="/Login">Login</a>
        </div>
      ) : (
        <div className="menu">
          <a href="/RegisterUser">Anunciar</a>
          <Link to="/" onClick={handleClick}>
            Sair
          </Link>
        </div>
      )}
    </Header>
  );
};

export default Banner;
