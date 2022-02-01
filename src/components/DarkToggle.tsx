import React from 'react';
import SunIcon from './svg/SunIcon';
import MoonIcon from './svg/MoonIcon';
import { useGlobalDispatch, useGlobalState } from '../context/GlobalContext';

const DarkToggle = () => {
  const state = useGlobalState();
  const dispatch = useGlobalDispatch();

  const toggleMode = () => dispatch({ type: 'TOGGLE_MODE' });

  return (
    <a href="#" onClick={toggleMode}>
      {state.mode === 'Dark' ? <SunIcon /> : <MoonIcon />}
    </a>
  );
};

export default DarkToggle;
