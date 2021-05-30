import {useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Container, Grow, Grid,AppBar,Typography } from '@material-ui/core';
import { getItems } from '../../actions/items';
import Items from '../Items/Items'
import Form from '../Forms/ItemForm';
import useStyles from '../../style'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const ItemIndex = () => {
    const [currentId, setCurrentId] = useState(null);
    const classes = useStyles();
    const dispatch = useDispatch();
  
    useEffect(() => {
        dispatch(getItems());
    }, [currentId, dispatch])

    return (
    <Container maxwidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
                <Typography className={classes.heading} variant="h2" align="center">Company Management  <ShoppingCartIcon style={{ fontSize: 60 }}/></Typography>
            </AppBar>
        <Grow in>
          <Container>
            <Grid container justify="space-between" alignItems="stretch" spacing={3}>
              <Grid item xs={12} sm={7}>
                <Items setCurrentId={setCurrentId}/>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Form currentId={currentId} setCurrentId={setCurrentId}/>
              </Grid>
            </Grid>
          </Container>
        </Grow>
      </Container>
  );
};

export default ItemIndex;