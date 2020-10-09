import React from 'react';
//Style
import './header.scss';
//Icons
import NotificationsIcon from '@material-ui/icons/Notifications';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const HeaderMenu = () => {
    return (
        <div className={'header-container'}>
            <div className={'elements-wrapper'}>
                <NotificationsIcon />
                <span>Daniel</span>
                <AccountCircleIcon />
            </div>
        </div>
    )
};

export default HeaderMenu