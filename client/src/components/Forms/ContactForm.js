import React, { useState, useEffect } from 'react';
import  { TextField, Button, Typography, Paper} from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';

import useStyles from './styles';
import { createContact, updateContact } from '../../actions/contacts';

// GET THE CURRENT ID

const ContactForm = ({ ccurrentId, setCCurrentId}) => {
    const [contactData, setContactData] = useState({ firstname: '', lastname: '', email: '', phone: '', company: ''});
    
    const contact = useSelector((state) => ccurrentId ? state.contacts.find((p) => p._id === ccurrentId ) : null); 

    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        if(contact) setContactData(contact);
    }, [contact])

    const handleSubmit = (e) => {
        e.preventDefault();

        if(ccurrentId){
            dispatch(updateContact(ccurrentId, contactData));
        }else{
            dispatch(createContact(contactData));
        }
        clear();
    }

    const clear = () =>{
        setCCurrentId(null);
        setContactData({ firstname: '', lastname: '', email: '', phone: '', company: ''});
    }

    return(
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography veriant="h6">{ccurrentId ? 'Editing' : 'Adding'} a contact</Typography>
                <TextField name="firstname" variant="outlined" label="Firstname" fullWidth value={contactData.firstname}  onChange={(e) => setContactData({ ...contactData, firstname: e.target.value })}/>
                <TextField name="lastname"  variant="outlined" label="Lastname"  fullWidth value={contactData.lastname}   onChange={(e) => setContactData({ ...contactData, lastname: e.target.value })}/>
                <TextField name="email"     variant="outlined" label="Email"     fullWidth value={contactData.email}      onChange={(e) => setContactData({ ...contactData, email: e.target.value })}/>
                <TextField name="phone"     variant="outlined" label="Phone"     fullWidth value={contactData.phone}      onChange={(e) => setContactData({ ...contactData, phone: e.target.value })}/>
                <TextField name="company"   variant="outlined" label="Company"   fullWidth value={contactData.company}    onChange={(e) => setContactData({ ...contactData, company: e.target.value })}/>
                
                <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
                <Button variant ="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
            </form>
        </Paper>
    );
}

export default ContactForm;