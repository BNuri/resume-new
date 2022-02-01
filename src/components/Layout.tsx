import React from 'react';
import Header from './Header';
import { useGlobalState } from '../context/GlobalContext';

const Layout: React.FC = ({ children }) => {
  const state = useGlobalState();
  return (
    <div className={`layout ${state.mode === 'Dark' ? 'dark-mode' : ''}`}>
      <Header />
      {children}
    </div>
  );
};

export default Layout;
