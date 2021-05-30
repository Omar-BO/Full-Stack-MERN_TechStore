import React from 'react';
import useStyles from './billStyle.js';
import { Card, CardActions, CardMedia, Button, Typography} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import UpdateIcon from '@material-ui/icons/Update';
import moment from 'moment';
import {useDispatch} from 'react-redux';
import { deleteBill } from '../../../actions/billActions.js';


const Bill = ({bill, setbCurrentId}) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    return (
        <Card className={classes.card}>
            <CardMedia className={classes.media} 
                image={require('../../../images/bill.png')}
                title="Contemplative Reptile"/>
            <div className={classes.overlay}>
                <Typography variant="h6">Bill #: {bill.id}</Typography>
                <Typography variant="caption">{moment(bill.addedAt).fromNow()}</Typography>
            </div>
            <div className={classes.overlay2}>
                <Button style={{ color: 'white' }} size="small" onClick={() => setbCurrentId(bill._id)}>
                    <UpdateIcon fontSize="default" />
                </Button>
            </div>
            <div className={classes.details}>
                <Typography variant="body2" color="textSecondary">Status: {bill.status}</Typography>
            </div>
            <Typography className={classes.title} gutterBottom variant="h5" component="h2">Client: {bill.client}</Typography>
            <Typography className={classes.title} gutterBottom variant="h6" component="h3">Total: {bill.total}$. </Typography>
            <div className={classes.details}>
                <Typography variant="body2" color="textSecondary">Reduction: {bill.reduction}%.</Typography>
            </div>
            <CardActions className={classes.cardActions}>
                <Button size="small" color="primary" onClick={() => dispatch(deleteBill(bill._id))}><DeleteIcon fontSize="small" /> Delete</Button>
            </CardActions>


        </Card>
    )
}

export default Bill