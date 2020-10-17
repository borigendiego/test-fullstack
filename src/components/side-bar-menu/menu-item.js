import React from 'react';

const MenuItem = (props) => {
    const { iconURL, label, Icon } = props.item;

    return (
        <div className={'item-container'}>
            {
                iconURL
                    ? <img className={'item-icon'} alt={'icon'} src={iconURL}/>
                    : Icon && <Icon className={'item-icon'} />
            }
            <span>{label}</span>
        </div>
    )
};

export default MenuItem;