import React from 'react';
import {
    Link
} from 'react-router-dom';
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
            link: 'dashboard'
        },
        {
            Icon: Description,
            label: 'My files',
            link: '/'
        },
        {
            Icon: People,
            label: 'Connections',
            link: '/connections'
        },
        {
            Icon: Create,
            label: 'File Request',
            link: '/files',
        },
        {
            Icon: Delete,
            label: 'Deleted Files',
            link: '/deleted-files',
        },
    ];

    return (
        <div className={'side-bar-container'}>
            <ul className={'side-bar-items'}>
                {
                    items.map((item, index) =>
                        <Link to={item.link} key={index}>
                            <li>
                                <MenuItem item={item} />
                            </li>
                        </Link>
                    )
                }
                <hr />
            </ul>
        </div>
    )
};

export default SideBarMenu;