import React from 'react';
import Company from './Company/company';
import useStyles from './companysStyle';
import {useSelector} from 'react-redux';


const Companys = () => {
    const classes = useStyles();
    const companys = useSelector((state)=> state.companysRed);

    console.log(companys);
    return(
        <>
            <h1>Companys</h1>
            <Company />
            <Company />
        </>
    )
}

export default Companys