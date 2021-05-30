import React from 'react';
import { Card, CardContent, CardMedia, Button, Typography } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

import moment from 'moment';

import { deleteItem } from '../../../actions/items';
import useStyles from './style.js'
import { useDispatch } from 'react-redux';

    
const Item = ({item, setCurrentId }) => {
    const dispatch = useDispatch();
    const classes = useStyles();

    return(
        <Card className={classes.card}>
            <CardMedia className={classes.media} image={item.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} name={item.name} />
            <div className={classes.overlay}>
                <Typography variant="h6">{item.name}</Typography>
                <Typography variant="body2">{moment(item.createdAt).fromNow()}</Typography>
            </div>
            <div className={classes.overlay2}>
                <Button style={{ color: 'white' }} size="small" onClick={() => setCurrentId(item._id)}><MoreHorizIcon fontSize="default" /></Button>
                <Button className={classes.btn_delete} size="small" onClick={() => dispatch(deleteItem(item._id))}><DeleteIcon fontSize="small" /></Button>
            </div>
            <div className={classes.details}>
                <Typography variant="body2" color="textSecondary" component="h2">{item.description}</Typography>
            </div>
            <CardContent className={classes.PriceQte}>
                <Typography variant="body2" color="textSecondary" component="p">{item.price} $, there is {item.quantity} in stock.</Typography>
            </CardContent>
        </Card>
    );
}

export default Item;