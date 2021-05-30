import React from 'react';
import {  Button, makeStyles, TableCell, TableRow } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import CreateIcon from '@material-ui/icons/Create';

import { deleteContact } from '../../../actions/contacts';
//import useStyles from './style.js'
import { useDispatch } from 'react-redux';

//Table

const useStyles = makeStyles(theme => ({
    pageContent: {
        margin: theme.spacing(5),
        padding: theme.spacing(3)
    },
    btn_delete: {
        color: 'red',
    }
}))
    
const Contact = ({contact, setCCurrentId }) => {
    const dispatch = useDispatch();
    const classes = useStyles();

    return(
        
        <TableRow key={contact._id}>
            <TableCell >{contact.firstname} {contact.lastname}</TableCell>
            <TableCell>{contact.email}</TableCell>
            <TableCell>{contact.phone}</TableCell>
            <TableCell>{contact.company}</TableCell>
            <TableCell>
                <Button style={{ color: 'green' }} size="small" onClick={() => setCCurrentId(contact._id)}><CreateIcon fontSize="default" /></Button>
                <Button className={classes.btn_delete} size="small" onClick={() => dispatch(deleteContact(contact._id))}><DeleteIcon fontSize="small" /></Button>
            </TableCell>
        </TableRow>
    );
}

export default Contact;