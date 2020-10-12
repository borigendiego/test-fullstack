import React from 'react';
//Components
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
//
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

function createData(name, modified) {
    return { name, modified };
}

const FilesTable = (props) => {
    const { files } = props;
    const classes = useStyles();
    const rows = files.map((file) => createData(file.name, file.modified));

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
                    {rows.map((row) => (
                        <TableRow key={row.name}>
                            <TableCell padding="checkbox">
                                <Checkbox
                                    onChange={() => {}}
                                    inputProps={{ 'aria-label': 'select all desserts' }}
                                />
                            </TableCell>
                            <TableCell component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell align="right">{`${row.modified} minutes ago`}</TableCell>
                            <TableCell align="right"><MoreHorizIcon /></TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
};

export default FilesTable