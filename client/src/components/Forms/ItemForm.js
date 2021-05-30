import React, { useState, useEffect } from 'react';
import  { TextField, Button, Typography, Paper} from '@material-ui/core';
import FileBase from 'react-file-base64';
import { useDispatch, useSelector } from 'react-redux';

import useStyles from './styles';
import { createItem, updateItem } from '../../actions/items';

// GET THE CURRENT ID

const ItemForm = ({ currentId, setCurrentId}) => {
    const [itemData, setItemData] = useState({ name: '', description: '', price: '', quantity: '', quote: '', selectedFile: '' });
    
    const item = useSelector((state) => currentId ? state.items.find((p) => p._id === currentId ) : null); 

    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        if(item) setItemData(item);
    }, [item])

    const handleSubmit = (e) => {
        e.preventDefault();

        if(currentId){
            dispatch(updateItem(currentId, itemData));
        }else{
            dispatch(createItem(itemData));
        }
        clear();
    }

    const clear = () =>{
        setCurrentId(null);
        setItemData({ name: '', description: '', price: '', quantity: '', quote: '', selectedFile: '' });
    }

    return(
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography veriant="h6">{currentId ? 'Editing' : 'Creating'} an Item</Typography>
                <TextField name="name"          variant="outlined" label="Name"         fullWidth value={itemData.name}         onChange={(e) => setItemData({ ...itemData, name: e.target.value })}/>
                <TextField name="description"   variant="outlined" label="Description"  fullWidth value={itemData.description}  onChange={(e) => setItemData({ ...itemData, description: e.target.value })}/>
                <TextField name="price"         variant="outlined" label="Price"        fullWidth value={itemData.price}        onChange={(e) => setItemData({ ...itemData, price: e.target.value })}/>
                <TextField name="quantity"      variant="outlined" label="Quantity"     fullWidth value={itemData.quantity}     onChange={(e) => setItemData({ ...itemData, quantity: e.target.value })}/>
                <TextField name="quote"         variant="outlined" label="Quote"        fullWidth value={itemData.quote}        onChange={(e) => setItemData({ ...itemData, quote: e.target.value })}/>
                <div className={classes.fileInput}> <FileBase type="file" multiple={false} onDone={({base64}) => setItemData({ ...itemData, selectedFile: base64})} /></div>
                
                <Button className={classes.buttonSubmit} variant ="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
                <Button variant ="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
            </form>
        </Paper>
    );
}

export default ItemForm;