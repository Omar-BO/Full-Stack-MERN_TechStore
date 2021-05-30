import React from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import Bill from './Bill/bill';
import useStyles from './billsStyle';
import {useSelector} from 'react-redux';


const Bills = ({setbCurrentId}) => {
    const classes = useStyles();
    const bills = useSelector((state)=> state.billsRed);
    return(
        !bills.length ? <CircularProgress /> : (
            <Grid className={classes.mainContainer} container alignItems="stretch" spacing={3}>
                {
                    bills.map((bill) =>(
                        <Grid key={bill._id} xs={12} sm={6} item>
                            <Bill bill={bill} setbCurrentId={setbCurrentId}/>
                        </Grid>
                    ))}
            </Grid>    
        )
      
    )
}

export default Bills