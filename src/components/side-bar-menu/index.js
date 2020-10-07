import React from 'react';
//Style
import './sideBarMenu.scss'
//Components
import MenuItem from './menu-item';
//Icons
import Chart from '../../assets/icons/chart.svg'

const SideBarMenu = () => {
    const items = [
        {
            icon: Chart,
            label: 'Dashboard',
        },
        {
            icon: Chart,
            label: 'My files',
        },
        {
            icon: Chart,
            label: 'Connections',
        },
        {
            icon: Chart,
            label: 'File Request',
        },
        {
            icon: Chart,
            label: 'Deleted Files',
        },
    ];

    return (
        <div className={'side-bar-container'}>
            <ul className={'side-bar-items'}>
                {
                    items.map((item, index) =>
                        <li key={index}>
                            <MenuItem item={item} />
                        </li>)
                }
            </ul>
        </div>
    )
};

export default SideBarMenu;