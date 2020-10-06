import React from 'react';
//Style
import './App.css';
//Components
import SideBarMenu from './components/side-bar-menu';
import MainApp from './components/main-app';


function App() {
  return (
    <div className={'App'}>
        <SideBarMenu />
        <MainApp />
    </div>
  );
}

export default App;
