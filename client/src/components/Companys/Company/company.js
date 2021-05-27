import React from 'react';
import useStyles from './companyStyle.js';

const Company = () => {
    const classes = useStyles();
    return (
        <h1 className={classes.title}>Company</h1>
    )
}

export default Company