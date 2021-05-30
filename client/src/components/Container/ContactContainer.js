  
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Container, Grow, Grid ,AppBar,Typography} from '@material-ui/core';
import { getContacts } from '../../actions/contacts';
import Contacts from '../Contacts/Contacts'
import Form from '../Forms/ContactForm';
import ContactsIcon from '@material-ui/icons/Contacts';
import useStyles1 from '../../style.js';


const ContactIndex = () => {
    const [ccurrentId, setCCurrentId] = useState(null);
    const classes1 = useStyles1();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getContacts());
    }, [ccurrentId, dispatch]);
    return (
        <Container maxwidth="lg">
            <AppBar className={classes1.appBar} position="static" color="inherit">
                <Typography className={classes1.heading} variant="h2" align="center">Contacts Management  <ContactsIcon style={{ fontSize: 60 }}/></Typography>
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                        <Grid contact xs={12} sm={7}>
                            <Contacts setCCurrentId={setCCurrentId}/>
                        </Grid>
                        <Grid contact xs={12} sm={4}>
                            <Form ccurrentId={ccurrentId} setCCurrentId={setCCurrentId}/>
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    )
}

export default ContactIndex;