import React from 'react';
import logo from './logo.svg';
import './App.css';
import notify from "./notify";
import {Suspense, useState} from "react";
import loadable from "@loadable/component";

// 로딩중 ui 를 보여주기위해 fallback 사용
const SplitMe = loadable(()=> import('./SplitMe'),{
  fallback: <div>loading...</div>
})
/*const SplitMe = React.lazy(() => import('./SplitMe'))*/
function App() {
  const [visible, setVisible] = useState(false)
  const onClick = () => {
    setVisible(true)
  }

  // 미리불러오는 preload 방법 마우스 오버시 로딩이 시작되고 클릭했을때 렌더링됨
  const onMouseOver = () => {
    SplitMe.preload()
  }

  return (
    <div>
      <heder className='App_header'>
        <img src={logo} className='App_logo' alt='logo' />
        <p onClick={onClick} onMouseOver={onMouseOver}>hello react</p>
        <Suspense fallback={<div>loading</div>}>
          {visible && <SplitMe/>}
        </Suspense>
      </heder>
    </div>
  );
}

export default App;
