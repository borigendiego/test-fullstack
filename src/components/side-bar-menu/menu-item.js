import React from 'react';

const MenuItem = (props) => {
    const { icon, label } = props.item;

    return (
        <div className={'item-container'}>
            <img alt={'icon'} src={icon}/>
            <span>{label}</span>
        </div>
    )
};

export default MenuItem;