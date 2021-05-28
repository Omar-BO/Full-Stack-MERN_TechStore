import React, {useState, useEffect} from 'react';
import useStyles from './newCompanyStyle.js';
import { TextField, Button, Typography, Paper} from '@material-ui/core';
import FileBase from 'react-file-base64';
import { useDispatch } from 'react-redux';
import { addCompany, updateCompany } from '../../actions/companysAction.js';
import {useSelector} from 'react-redux';

const NewCompany = ({currentId, setCurrentId}) => {
    const [companyData, setCompanyData] = useState({id:'',name: '',address: '',zipCode: '',country: '',logo:'',contacts:''});
    const companyToUpd = useSelector((state)=> currentId ? state.companysRed.find((p)=> p._id === currentId) : null);
    const classes = useStyles();
    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();
        if(currentId){
            dispatch(updateCompany(currentId, companyData));
        }
        else{
            companyData.contacts=0;
            dispatch(addCompany(companyData));
        }
        clear();
    }
    const clear = () => {
        setCurrentId(null);
        setCompanyData({id:'',name: '',address: '',zipCode: '',country: '',logo:'',contacts:''});
    }
    useEffect(() => {
        if (companyToUpd) setCompanyData(companyToUpd);
    },[companyToUpd]);
    return(
        <Paper className={classes.paper}>
            <form autoComplete="on" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography variant="h6">{currentId ? 'Update a Company' :'Add a new Company'}</Typography>
                <TextField required name="id" variant="outlined" label="ID" fullWidth value={companyData.id} onChange={(e)  => setCompanyData({...companyData, id: e.target.value})}/>
                <TextField required name="name" variant="outlined" label="Name" fullWidth value={companyData.name} onChange={(e)=> setCompanyData({...companyData, name: e.target.value})}/>
                <TextField required name="address" variant="outlined" label="Address" fullWidth value={companyData.address} onChange={(e)=> setCompanyData({...companyData, address: e.target.value})}/>
                <TextField required name="zipCode" variant="outlined" label="Zip Code" fullWidth value={companyData.zipCode} onChange={(e)=> setCompanyData({...companyData, zipCode: e.target.value})}/>
                <TextField required name="country" variant="outlined" label="Country" fullWidth value={companyData.country} onChange={(e)=> setCompanyData({...companyData, country: e.target.value})}/>
                <div className={classes.fileInput}>
                    <FileBase required
                        type="file"
                        multiple={false}
                        onDone={({base64})=> setCompanyData({...companyData, logo: base64})}
                    />
                </div>
                <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
                <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
            </form>
        </Paper>
    )
}

export default NewCompany