import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import React, { useEffect, useState } from 'react';
import { Collapse } from '@material-ui/core';
import useStyles1 from '../../style.js';
import HelpIcon from '@material-ui/icons/Help';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';


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

function Support(props) {
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
        <Typography className={classes1.heading} variant="h2" align="center">Technical Support  <HelpIcon style={{ fontSize: 60 }}/></Typography>
    </AppBar>
    <Paper className={classes.paper}>
      <div className={classes.contentWrapper}>
        <Typography color="textSecondary" align="center">
          <span>This project is made by <b>Omar BEN OMRANE</b>, a Student at Ecole Polytechnique Internationale in Big Data and Business Intelligence Engineering.</span> 
        </Typography>
        <br/>
        <div>
        Feel free to check the project GitHub Repositorie here : &ensp; <a rel="noreferrer" href="https://github.com/Omar-BO/Full-Stack-MERN_TechStore" target="_blank" ><GitHubIcon style={{ fontSize: 30, color:'#5AFF3D' }}/></a> 
        &ensp; ,Please don't forget a give me a start ⭐. Thank you ❤️.
        <br/>
        For any Technical Support, You can contact me in : <br/>
        - LinkedIn: &ensp; <a rel="noreferrer" href="https://www.linkedin.com/in/omar-ben-omrane" target="_blank" ><LinkedInIcon style={{ fontSize: 30, color:'#5AFF3D' }}/></a>.
        <br/>
        - E-Mail &ensp; <EmailIcon style={{ fontSize: 30, color:'#5AFF3D' }}/> <b>: benomraneomar@gmail.com</b>.
        </div>
      </div>
    </Paper>
  </Collapse>
  );
}

Support.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Support);