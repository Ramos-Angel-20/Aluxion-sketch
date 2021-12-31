import React, { useContext } from 'react';
import './App.css';
import { AnimatePresence } from 'framer-motion';

import Menu from './components/Menu';
import Intro from './containers/intro/intro';
import { UIContext } from './context/ui';

function App() {
  
  const { menuIsOpened } = useContext(UIContext);

  return (
    <>
      
      <AnimatePresence
        initial={false}
        exitBeforeEnter={true}
      >
        {menuIsOpened && <Menu />}
      </AnimatePresence>
      <Intro />
    </>

  );
}

export default App;
