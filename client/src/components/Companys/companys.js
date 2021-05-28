import React from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import Company from './Company/company';
import useStyles from './companysStyle';
import {useSelector} from 'react-redux';


const Companys = ({setCurrentId}) => {
    const classes = useStyles();
    const companys = useSelector((state)=> state.companysRed);
    return(
        !companys.length ? <CircularProgress /> : (
            <Grid className={classes.mainContainer} container alignItems="stretch" spacing={3}>
                {
                    companys.map((company) =>(
                        <Grid key={company._id} xs={12} sm={6} item>
                            <Company company={company} setCurrentId={setCurrentId}/>
                        </Grid>
                    ))}
            </Grid>    
        )
      
    )
}

export default Companys