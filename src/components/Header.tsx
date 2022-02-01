import React from 'react';
import '../assets/sass/header.scss';
import GithubIcon from './svg/GithubIcon';
import GlobeIcon from './svg/GlobeIcon';
import EnvelopeIcon from './svg/EnvelopeIcon';
import MobileIcon from './svg/MobileIcon';
import DarkToggle from './DarkToggle';

const Header = () => {
  return (
    <header className="header">
      <h1>배누리</h1>
      <ul className="header__column">
        <li className="header__column-item">
          <a href="https://github.com/bnuri" title="github">
            <i className="fab fa-github fa-lg"></i>
            <GithubIcon />
          </a>
        </li>
        {/*<li className="header__column-item">*/}
        {/*  <a href="https://www.bnuri.me" title="homepage">*/}
        {/*    <GlobeIcon />*/}
        {/*  </a>*/}
        {/*</li>*/}
        <li className="header__column-item">
          <a href="mailto:luckmon05@naver.com" title="email">
            <EnvelopeIcon />
            <span> luckmon05@naver.com</span>
          </a>
        </li>
        <li className="header__column-item">
          <a href="tel:010-2791-9847" title="phone">
            <MobileIcon />
            <span> 010-2791-9847</span>
          </a>
        </li>
        <li className="header__column-item">
          <DarkToggle />
        </li>
      </ul>
    </header>
  );
};

export default Header;
