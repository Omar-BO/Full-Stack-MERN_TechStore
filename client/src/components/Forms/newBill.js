import React, {useState, useEffect} from 'react';
import useStyles from './newCompanyStyle.js';
import { TextField, Button, Typography, Paper} from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { addBill, updateBill } from '../../actions/billActions.js';
import {useSelector} from 'react-redux';

const NewBill = ({bcurrentId, setbCurrentId}) => {
    const [billData, setBillData] = useState({id:'',client: '',total: '',reduction: '',status: ''});
    const billToUpd = useSelector((state)=> bcurrentId ? state.billsRed.find((p)=> p._id === bcurrentId) : null);
    const classes = useStyles();
    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();
        if(bcurrentId){
            dispatch(updateBill(bcurrentId, billData));
        }
        else{
            billData.contacts=0;
            dispatch(addBill(billData));
        }
        clear();
    }
    const clear = () => {
        setbCurrentId(null);
        setBillData({id:'',client: '',total: '',reduction: '',status: ''});
    }
    useEffect(() => {
        if (billToUpd) setBillData(billToUpd);
    },[billToUpd]);
    return(
        <Paper className={classes.paper}>
            <form autoComplete="on" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography variant="h6">{bcurrentId ? 'Update a Bill' :'Add a new Bill'}</Typography>
                <TextField required name="id" variant="outlined" label="ID" fullWidth value={billData.id} onChange={(e)  => setBillData({...billData, id: e.target.value})}/>
                <TextField required name="client" variant="outlined" label="Client" fullWidth value={billData.client} onChange={(e)=> setBillData({...billData, client: e.target.value})}/>
                <TextField required name="total" variant="outlined" label="Total" fullWidth value={billData.total} onChange={(e)=> setBillData({...billData, total: e.target.value})}/>
                <TextField required name="reduction" variant="outlined" label="Reduction" fullWidth value={billData.reduction} onChange={(e)=> setBillData({...billData, reduction: e.target.value})}/>
                <TextField required name="status" variant="outlined" label="Status" fullWidth value={billData.status} onChange={(e)=> setBillData({...billData, status: e.target.value})}/>

                <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
                <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
            </form>
        </Paper>
    )
}

export default NewBill