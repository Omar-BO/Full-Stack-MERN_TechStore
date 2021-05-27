import React,{useEffect} from 'react';
import {Container, AppBar, Typography, Grow, Grid} from '@material-ui/core';
import Companys from './components/Companys/companys.js';
import NewCompany from './components/Forms/newCompany.js';
import useStyles from './style.js';
import {useDispatch} from 'react-redux';
import {getCompanys} from './actions/companysAction.js'


import techStore from './images/techStore2.png';

const App = () => {
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getCompanys());
    }, [dispatch]);
    return (
        <Container maxWidth="lg">
            <AppBar className={classes.appBar} position="static" color="inherit">
                <Typography className={classes.heading} variant="h2" align="center">Tech Store</Typography>
                <img className={classes.image} src={techStore} alt="TechStore" height="60"/>
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container justify="space-between" alignContent="stretch" spacing={3}>
                        <Grid item xs={12} sm={7}>
                            <Companys />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <NewCompany />
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    ) 
}

export default App;