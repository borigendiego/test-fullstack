import React from 'react';
//Style
import './main-app.scss';
//Components
import FilesManager from './files-manager';
import HeaderMenu from './header-menu'

const MainApp = () => {
    return (
        <div className={'main-app-container'}>
            <HeaderMenu />
            <FilesManager />
        </div>
    )
};

export default MainApp