import React from 'react';
import Header from './Header';
import { useGlobalState } from '../context/ModeContext';

const Layout: React.FC = ({ children }) => {
  const state = useGlobalState();
  return (
    <div className={`layout ${state.mode === 'Dark' ? 'dark-mode' : ''}`}>
      <Header />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
