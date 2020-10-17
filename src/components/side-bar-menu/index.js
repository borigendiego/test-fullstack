import React from 'react';
//Style
import './sideBarMenu.scss'
//Components
import MenuItem from './menu-item';
//Icons
import Chart from '../../assets/icons/chart.svg';
import Description from '@material-ui/icons/Description';
import People from '@material-ui/icons/People';
import Create from '@material-ui/icons/Create';
import Delete from '@material-ui/icons/Delete';

const SideBarMenu = () => {
    const items = [
        {
            iconURL: Chart,
            label: 'Dashboard',
        },
        {
            Icon: Description,
            label: 'My files',
        },
        {
            Icon: People,
            label: 'Connections',
        },
        {
            Icon: Create,
            label: 'File Request',
        },
        {
            Icon: Delete,
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
                <hr />
            </ul>
        </div>
    )
};

export default SideBarMenu;