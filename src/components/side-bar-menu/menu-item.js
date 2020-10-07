import React from 'react';

const MenuItem = (props) => {
    const { icon, label } = props.item;

    return (
        <div className={'item-container'}>
            <img src={icon}/>
            <span>{label}</span>
        </div>
    )
};

export default MenuItem;