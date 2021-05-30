import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import React, { useEffect, useState } from 'react';
import { Collapse } from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import useStyles1 from '../../style.js';
import BuildIcon from '@material-ui/icons/Build';


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

function Profile(props) {
  const { classes } = props;
  const [checkedd, setCheckedd] = useState(false);
  const classes1 = useStyles1();
  useEffect(() => {
    setCheckedd(true);
  }, []);

  return (
    <Collapse
    in={checkedd}
    {...(checkedd ? { timeout: 1000 } : {})}
    collapsedHeight={50}
  >
    
    <AppBar className={classes1.appBar} position="static" color="inherit">
        <Typography className={classes1.heading} variant="h2" align="center">Profile  <AccountCircleIcon style={{ fontSize: 60 }}/></Typography>
    </AppBar>
    <Paper className={classes.paper}>
      <div className={classes.contentWrapper}>
        <Typography color="textSecondary" align="center">
          <h1><b>Coming SOON ...</b> &ensp;<BuildIcon  style={{ fontSize: 40,color: '#5AFF3D' }} className="fa fa-plus-circle"/> </h1> 
        </Typography>
      </div>
    </Paper>
  </Collapse>
  );
}

Profile.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Profile);