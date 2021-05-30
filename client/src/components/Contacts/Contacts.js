import React,{ useState } from 'react';
import { Paper, makeStyles, TableBody } from '@material-ui/core';
import { useSelector } from 'react-redux';

import Contact from './Contact/Contact';

//Table
import useTable from './useTable';

const useStyles = makeStyles(theme => ({
    pageContent: {
        margin: theme.spacing(5),
        padding: theme.spacing(3),
        width: '100%'
    }
}))

const headCells = [
    { id: 'fullName', label: 'Contact Name' },
    { id: 'email', label: 'Email Address (Personal)' },
    { id: 'mobile', label: 'Mobile Number' },
    { id: 'department', label: 'Company' },
    { id: 'actions', label: 'Actions'}
]
    
const Contacts = ({ setCCurrentId }) => {
    const contacts = useSelector((state) => state.contacts);
    const classes = useStyles();
    const records = useState(contacts.getContacts);
    
    const {
        TblContainer,
        TblHead,
    } = useTable(records, headCells);
    
    return(
        <>
            <Paper className={classes.pageContent}>
                <TblContainer>
                    <TblHead/>
                    <TableBody>
                    {contacts.map((contact) => (
                        <Contact contact={contact} setCCurrentId={setCCurrentId} />
                    ))}  
                    </TableBody>
                </TblContainer>
            </Paper>
        </>
    );
}

export default Contacts;