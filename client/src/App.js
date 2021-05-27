import React from 'react';
import {Container, AppBar, Typography, Grow, Grid} from '@material-ui/core';

import techStore from './images/techStore2.png';

const App = () => {
    return (
        <Container maxWidth="lg">
            <AppBar position="static" color="inherit">
                <Typography variant="h2" align="center">Tech Store</Typography>
                <img src={techStore} alt="TechStore" height="600"/>
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container justify="space-between" alignContent="stretch" spacing={3}>
                        <Grid item xs={12} sm={7}>

                        </Grid>
                        <Grid item xs={12} sm={4}>
                            
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    )
}

export default App;