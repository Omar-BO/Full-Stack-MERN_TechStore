import React from 'react';
import useStyles from './companyStyle.js';
import { Card, CardActions, CardMedia, Button, Typography} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import UpdateIcon from '@material-ui/icons/Update';
import PeopleAltTwoToneIcon from '@material-ui/icons/PeopleAltTwoTone';
import moment from 'moment';


const Company = ({company, setCurrentId}) => {
    const classes = useStyles();
    return (
        <Card className={classes.card}>
            <CardMedia className={classes.media} image={company.logo} title={company.name}/>
            <div className={classes.overlay}>
                <Typography variant="h6">Company #: {company.id}</Typography>
                <Typography variant="caption">{moment(company.addedAt).fromNow()}</Typography>
            </div>
            <div className={classes.overlay2}>
                <Button style={{ color: 'white' }} size="small" onClick={() => setCurrentId(company._id)}>
                    <UpdateIcon fontSize="default" />
                </Button>
            </div>
            <div className={classes.details}>
                <Typography variant="body2" color="textSecondary">Address: {company.address}, {company.country}, {company.zipCode}</Typography>
            </div>
            <Typography className={classes.title} gutterBottom variant="h5" component="h2">{company.name}</Typography>
            <CardActions className={classes.cardActions}>
                <Button disabled size="small" color="primary" ><PeopleAltTwoToneIcon fontSize="small" /> {company.contacts}</Button>
                <Button size="small" color="primary" onClick={() => {}}><DeleteIcon fontSize="small" /> Delete</Button>
            </CardActions>


        </Card>
    )
}

export default Company