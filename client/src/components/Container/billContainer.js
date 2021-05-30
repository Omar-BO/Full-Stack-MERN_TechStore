import React,{useState, useEffect} from 'react';
import {Container, AppBar, Typography, Grow, Grid} from '@material-ui/core';
import Bills from '../Bills/bills.js';
import NewBill from '../Forms/newBill.js';
import useStyles from '../../style.js';
import {useDispatch} from 'react-redux';
import {getBills} from '../../actions/billActions.js';
import ReceiptIcon from '@material-ui/icons/Receipt';

const BillContainer = () => {

    const [bcurrentId, setbCurrentId] = useState(null);
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getBills());
    }, [bcurrentId, dispatch]);
    return (
        <Container maxWidth="lg">
            <AppBar className={classes.appBar} position="static" color="inherit">
                <Typography className={classes.heading} variant="h2" align="center">Bill Managment <ReceiptIcon style={{ fontSize: 60 }}/> </Typography>
            </AppBar>
            <Grow in>
                <Container>
                    <Grid className={classes.mainContainer} container justify="space-between" alignContent="stretch" spacing={3}>
                        <Grid item xs={12} sm={4}>
                            <NewBill bcurrentId={bcurrentId} setbCurrentId={setbCurrentId}/>
                        </Grid>
                        <Grid item xs={12} sm={7}>
                            <Bills  setbCurrentId={setbCurrentId}/>
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    ) 
}


export default BillContainer;
