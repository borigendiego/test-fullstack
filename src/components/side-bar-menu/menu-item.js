import React from 'react';
import { getDeletedFiles } from '../../redux/selectors';
import { connect } from "react-redux";

const MenuItem = (props) => {
    const { item: { iconURL, label, Icon }, deletedFiles } = props;

    return (
        <div className={'item-container'}>
            {
                iconURL
                    ? <img className={'item-icon'} alt={'icon'} src={iconURL}/>
                    : Icon && <Icon className={'item-icon'} />
            }
            <span>{label}</span>
            {label === 'Deleted Files' && deletedFiles > 0 && <span className={'deleted-item'}>{deletedFiles}</span>}
        </div>
    )
};

const mapStateToProps = (state) => ({
    deletedFiles: getDeletedFiles(state),
});

const mapDispatchToProps = () => ({

});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MenuItem)