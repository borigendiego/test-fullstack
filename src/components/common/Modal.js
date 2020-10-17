import React from 'react';
//Material UI Components
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles } from '@material-ui/core/styles';


const MyModal = (props) => {
    const { dialogText, dialogTittle, setOpenModel, shouldOpen } = props;
    const handleClose = () => setOpenModel(false);
    const useStyles = makeStyles(theme => ({
        dialogTittle: {
            '& h2': {
                textAlign: 'left',
                color: '#7bddd2'
            }
        },
    }));
    const classes = useStyles();

    return (
        <Dialog open={shouldOpen} onClose={handleClose} aria-labelledby="form-dialog-title" disableBackdropClick={true}>
            <DialogTitle id="form-dialog-title" classes={{root: classes.dialogTittle}}>{dialogTittle}</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    {dialogText}
                </DialogContentText>
                {props.children}
            </DialogContent>
        </Dialog>
    )
};

export default MyModal