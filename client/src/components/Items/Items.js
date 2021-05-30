import React from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';

import Item from './Item/Item';
import useStyles from './styles';
    
const Items = ({ setCurrentId }) => {
    const items = useSelector((state) => state.items);
    const classes = useStyles();
    
    return(
        !items.length ? <CircularProgress /> : (
            <Grid className={classes.container} container alignItems="stretch" spacing={3}>
                {items.map((item) => (
                    <Grid key={item._id} item xs={12} sm={6}>
                        <Item item={item} setCurrentId={setCurrentId} />
                    </Grid>
                ))}
            </Grid>
        )
    );
}

export default Items;