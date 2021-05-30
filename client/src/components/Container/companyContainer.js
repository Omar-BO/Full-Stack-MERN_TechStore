import React,{useState, useEffect} from 'react';
import {Container, AppBar, Typography, Grow, Grid} from '@material-ui/core';
import Companys from '../Companys/companys.js';
import NewCompany from '../Forms/newCompany.js';
import useStyles from '../../style.js';
import {useDispatch} from 'react-redux';
import {getCompanys} from '../../actions/companysAction.js'
import BusinessIcon from '@material-ui/icons/Business';


const CompanyContainer = () => {

    const [currentId, setCurrentId] = useState(null);
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getCompanys());
    }, [currentId, dispatch]);
    return (
        <Container maxWidth="lg">
            <AppBar className={classes.appBar} position="static" color="inherit">
                <Typography className={classes.heading} variant="h2" align="center">Company Management  <BusinessIcon style={{ fontSize: 60 }}/></Typography>
            </AppBar>
            <Grow in>
                <Container>
                    <Grid className={classes.mainContainer} container justify="space-between" alignContent="stretch" spacing={3}>
                        <Grid item xs={12} sm={4}>
                            <NewCompany currentId={currentId} setCurrentId={setCurrentId}/>
                        </Grid>
                        <Grid item xs={12} sm={7}>
                            <Companys  setCurrentId={setCurrentId}/>
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    ) 
}


export default CompanyContainer;
