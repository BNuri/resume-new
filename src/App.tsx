import React from 'react';
import './assets/sass/reset.scss';
import './assets/sass/style.scss';
import './assets/sass/section.scss';
import { GlobalProvider } from './context/ModeContext';
import Layout from './components/Layout';
import Career from './components/Career';
import ToyProject from './components/ToyProject';
import Education from './components/Education';
import Certificate from './components/Certificate';

function App() {
  return (
    <GlobalProvider>
      <Layout>
        <Career />
        <ToyProject />
        <Education />
        <Certificate />
      </Layout>
    </GlobalProvider>
  );
}

export default App;
