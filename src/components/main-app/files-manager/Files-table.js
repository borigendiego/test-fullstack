import React, { useState } from 'react';
//Redux
import { connect } from "react-redux";
import { getFilesList } from "../../../redux/selectors";
import { deleteFiles, updateFile } from "../../../redux/actions";
//Material ui
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import Menu from '@material-ui/core/Menu';
import IconButton from '@material-ui/core/IconButton';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import MenuItem from '@material-ui/core/MenuItem';
import Button from "@material-ui/core/Button";
//Components
import Modal from '../../common/Modal';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
    inputContainer: {
        marginBottom: '15px',
        display: 'flex',
        alignItems: 'baseline',
    },
    buttonsContainer: {
        display: 'flex',
        justifyContent: 'space-between'
    },

});

const createData = (name, modified, id) => ({ name, modified, id });

const FilesTable = (props) => {
    const { files, deleteFile, updateFile } = props;
    const classes = useStyles();
    const rows = files.map((file) => createData(file.name, file.modified, file.id));
    const [anchorEl, setAnchorEl] = useState(null);
    const [selectedItem, setSelectedItem] = useState(null);
    const [inputValue, setInputValue] = useState('');
    const [openModifyModal, setOpenModifyModal] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event, item) => {
        setSelectedItem(item);
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell padding="checkbox">
                            <Checkbox
                                onChange={() => {}}
                                inputProps={{ 'aria-label': 'select all desserts' }}
                            />
                        </TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell align="right">Modified</TableCell>
                        <TableCell align="right" />
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row, index) => {
                        return (
                        <TableRow key={index} selectable={false}>
                            <TableCell padding={'checkbox'}>
                                <Checkbox
                                    inputProps={{ 'aria-label': 'select all desserts' }}
                                />
                            </TableCell>
                            <TableCell component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell align="right">{`${row.modified} minutes ago`}</TableCell>
                            <TableCell align="right">
                                <div>
                                    <IconButton
                                        aria-label={'more'}
                                        aria-controls={'long-menu'}
                                        aria-haspopup={'true'}
                                        onClick={(event) => handleClick(event, row)}
                                    >
                                        <MoreHorizIcon />
                                    </IconButton>
                                    <Menu
                                        anchorEl={anchorEl}
                                        keepMounted
                                        open={open}
                                        onClose={handleClose}
                                        PaperProps={{
                                            style: {
                                                maxHeight: 48 * 4.5,
                                                width: '20ch',
                                            },
                                        }}
                                    >
                                        <MenuItem key={'Download'} onClick={handleClose}>Download</MenuItem>
                                        <MenuItem key={'Rename'} onClick={() => {
                                            setOpenModifyModal(true);
                                            handleClose();
                                        }}>
                                            Rename
                                        </MenuItem>
                                        <MenuItem key={'Delete'} onClick={() => {
                                            deleteFile(selectedItem);
                                            handleClose();
                                        }
                                        }>
                                            Delete
                                        </MenuItem>
                                    </Menu>
                                </div>
                            </TableCell>
                        </TableRow>
                    )})}
                </TableBody>
            </Table>
            <Modal
                shouldOpen={openModifyModal}
                dialogTittle={'Rename'}
                setOpenModel={setOpenModifyModal}
            >
                <div className={classes.inputContainer}>
                    <span>Name:</span>
                    <input
                        onChange={e => setInputValue(e.target.value)}
                        value={inputValue}
                    />
                </div>
                <div className={classes.buttonsContainer}>
                    <Button
                        component={'span'}
                        variant={'contained'}
                        color={'primary'}
                        onClick={() => {
                            updateFile({
                                ...selectedItem,
                                name: inputValue,
                                modified: 0,
                            });
                            setInputValue('');
                            setOpenModifyModal(false);
                        }}
                    >
                        Update
                    </Button>
                    <Button
                        component={'span'}
                        onClick={() => {
                            setOpenModifyModal(false);
                        }}
                    >
                        Cancel
                    </Button>
                </div>
            </Modal>
        </TableContainer>
    )
};

const mapStateToProps = (state) => ({
    files: getFilesList(state),
});

const mapDispatchToProps = (dispatch) => ({
    deleteFile: (id) => {dispatch(deleteFiles(id))},
    updateFile: (data) => dispatch(updateFile(data)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FilesTable)