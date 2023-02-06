import React from 'react';
import logo from './logo.svg';
import './App.css';
import notify from "./notify";
import {Suspense, useState} from "react";

const SplitMe = React.lazy(() => import('./SplitMe'))
function App() {
  const [visible, setVisible] = useState(false)
  const onClick = () => {
    setVisible(true)
  }

  return (
    <div>
      <heder className='App_header'>
        <img src={logo} className='App_logo' alt='logo' />
        <p onClick={onClick}>hello react</p>
        <Suspense fallback={<div>loading</div>}>
          {visible && <SplitMe/>}
        </Suspense>
      </heder>
    </div>
  );
}

export default App;
