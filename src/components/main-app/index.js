import React from 'react';
//Components
import FilesManager from './files-manager';
import HeaderMenu from './header-menu'


const MainApp = () => {
    return (
        <div>
            <HeaderMenu />
            <FilesManager />
        </div>
    )
};

export default MainApp