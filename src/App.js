import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
//Style
import './App.css';
//Components
import SideBarMenu from './components/side-bar-menu';
import MainApp from './components/main-app';


function App() {
  return (
    <div className={'App'}>
        <BrowserRouter>
            <Switch>
                <Route exact path={'/'}>
                    <SideBarMenu />
                    <MainApp />
                </Route>
                <Route path={'/dashboard'}>
                    <SideBarMenu />
                    <h1>DASHBOARD</h1>
                </Route>
                <Route path={'/connections'}>
                    <SideBarMenu />
                    <h1>CONNECTIONS</h1>
                </Route>
                <Route path={'/files'}>
                    <SideBarMenu />
                    <h1>FILES</h1>
                </Route>
                <Route path={'/deleted-files'}>
                    <SideBarMenu />
                    <h1>DELETED FILES</h1>
                </Route>
            </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
