import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import { withStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import RefreshIcon from '@material-ui/icons/Refresh';

// import techStore from '../../images/techStore2.png';
// import {useState, useEffect} from 'react';
// import {Container,Grow,} from '@material-ui/core';
// import Companys from '../../components/Companys/companys.js';
// import NewCompany from '../../components/Forms/newCompany.js';
// import useStyles from '../../style.js';
// import {useDispatch} from 'react-redux';
// import {getCompanys} from '../../actions/companysAction.js'

const styles = (theme) => ({
  paper: {
    maxWidth: 936,
    margin: 'auto',
    overflow: 'hidden',
  },
  searchBar: {
    borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
  },
  searchInput: {
    fontSize: theme.typography.fontSize,
  },
  block: {
    display: 'block',
  },
  addUser: {
    marginRight: theme.spacing(1),
  },
  contentWrapper: {
    margin: '40px 16px',
  },
});

function Content(props) {
  const { classes } = props;
  // const [currentId, setCurrentId] = useState(null);
  // const classes = useStyles();
  // const dispatch = useDispatch();

  // useEffect(()=>{
  //     dispatch(getCompanys());
  // }, [currentId, dispatch]);
  return (
    <Paper className={classes.paper}>
      <AppBar className={classes.searchBar} position="static" color="default" elevation={0}>
        <Toolbar>
          <Grid container spacing={2} alignItems="center">
            <Grid item>
              <SearchIcon className={classes.block} color="inherit" />
            </Grid>
            <Grid item xs>
              <TextField
                fullWidth
                placeholder="Search by email address, phone number, or user UID"
                InputProps={{
                  disableUnderline: true,
                  className: classes.searchInput,
                }}
              />
            </Grid>
            <Grid item>
              <Button variant="contained" color="primary" className={classes.addUser}>
                Add user
              </Button>
              <Tooltip title="Reload">
                <IconButton>
                  <RefreshIcon className={classes.block} color="inherit" />
                </IconButton>
              </Tooltip>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <div className={classes.contentWrapper}>
        <Typography color="textSecondary" align="center">
          No users for this project yet
        </Typography>
      </div>
    </Paper>
        //     <Container maxWidth="lg">
        //     <AppBar className={classes.appBar} position="static" color="inherit">
        //         <Typography className={classes.heading} variant="h2" align="center">Tech Store</Typography>
        //         <img className={classes.image} src={techStore} alt="TechStore" height="60"/>
        //     </AppBar>
        //     <Grow in>
        //         <Container>
        //             <Grid className={classes.mainContainer} container justify="space-between" alignContent="stretch" spacing={3}>
        //                 <Grid item xs={12} sm={7}>
        //                     <Companys  setCurrentId={setCurrentId}/>
        //                 </Grid>
        //                 <Grid item xs={12} sm={4}>
        //                     <NewCompany currentId={currentId} setCurrentId={setCurrentId}/>
        //                 </Grid>
        //             </Grid>
        //         </Container>
        //     </Grow>
        // </Container>
  );
}

Content.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Content);