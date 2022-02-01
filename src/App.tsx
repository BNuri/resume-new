import React from 'react';
import './assets/sass/reset.scss';
import './assets/sass/style.scss';
import { GlobalProvider } from './context/GlobalContext';
import Layout from './components/Layout';

function App() {
  return (
    <GlobalProvider>
      <Layout></Layout>
    </GlobalProvider>
  );
}

export default App;
