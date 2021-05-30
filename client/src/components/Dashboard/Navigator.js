import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import BusinessIcon from '@material-ui/icons/Business';
import ContactsIcon from '@material-ui/icons/Contacts';
import ReceiptIcon from '@material-ui/icons/Receipt';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import HelpIcon from '@material-ui/icons/Help';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { Link } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';


const categories = [
  {
    id: 'MAIN NAVIGATION',
    children: [
      { id: 'Companys', icon: <BusinessIcon />, linkk:"/company",active:(()=>window.location.pathname==="/companyy"?true : false) },
      { id: 'Contacts', icon: <ContactsIcon />, linkk: "/contact" },
      { id: 'Bill', icon: <ReceiptIcon />, linkk: "/bill" },
      { id: 'Items', icon: <ShoppingCartIcon />, linkk: "/item" },
      // { id: 'Functions', icon: <SettingsEthernetIcon /> },
      // { id: 'ML Kit', icon: <SettingsInputComponentIcon /> },
    ],
  },
  {
    id: 'ACCOUNT',
    children: [
      { id: 'Profile', icon: <AccountCircleIcon />,linkk:"/profile" },
      { id: 'Customer Support', icon: <HelpIcon />,linkk:"/support" },
      { id: 'LOG OUT', icon: <ExitToAppIcon />,linkk:"/login" },
    ],
  },
];

const styles = (theme) => ({
  categoryHeader: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
  categoryHeaderPrimary: {
    color: theme.palette.common.white,
  },
  item: {
    paddingTop: 1,
    paddingBottom: 1,
    color: 'rgba(255, 255, 255, 0.7)',
    '&:hover,&:focus': {
      backgroundColor: 'rgba(255, 255, 255, 0.08)',
    },
  },
  itemCategory: {
    backgroundColor: '#232f3e',
    boxShadow: '0 -1px 0 #404854 inset',
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
  firebase: {
    fontSize: 24,
    color: theme.palette.common.white,
  },
  itemActiveItem: {
    color: '#4fc3f7',
  },
  itemPrimary: {
    fontSize: 'inherit',
  },
  itemIcon: {
    minWidth: 'auto',
    marginRight: theme.spacing(2),
  },
  divider: {
    marginTop: theme.spacing(2),
  },
});

function Navigator(props) {
  const { classes, ...other } = props;
  // const { setActiveBar, ...set } = props;
  const pop = Object.assign({}, props);
  // const { activeBar, ...other } = props;
  // setActiveBar
 const test = (linkk)=>{
    console.log("tarabbi");
    setTimeout(()=>{
      pop.setActiveBar(linkk)
    },10000);
    // pop.setActiveBar(linkk);

  }
  
  return (
    <Drawer variant="permanent" {...other}>
      <List disablePadding>
        <ListItem className={clsx(classes.firebase, classes.item, classes.itemCategory)}>
          Tech Store   <Avatar alt="Logo" src="https://www.energytechstore.co.za/wp-content/uploads/2017/07/EnergytechLogo.gif" className={classes.large} style={{ height: '70px', width: '70px' }}/>
        </ListItem>
        <ListItem button component={Link} to="/home" className={clsx(classes.item, classes.itemCategory)}>
          <ListItemIcon className={classes.itemIcon}>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText
            classes={{
              primary: classes.itemPrimary,
            }}
          >
            HOME PAGE
          </ListItemText>
        </ListItem>
        {categories.map(({ id, children }) => (
          <React.Fragment key={id}>
            <ListItem className={classes.categoryHeader}>
              <ListItemText
                classes={{
                  primary: classes.categoryHeaderPrimary,
                }}
              >
                {id}
              </ListItemText>
            </ListItem>
            {children.map(({ id: childId, icon,active, linkk }) => (
              <ListItem
                key={childId}
                button 
                onClick={
                  // pop.setActiveBar(linkk)
                  // pop.activeBar===linkk
                  test(linkk)
                }
                className={clsx(classes.item, active && classes.itemActiveItem)}
                component={Link} to={linkk}
              >
                <ListItemIcon className={classes.itemIcon}>{icon}</ListItemIcon>
                <ListItemText
                  classes={{
                    primary: classes.itemPrimary,
                  }}
                >
                  {childId}
                </ListItemText>
              </ListItem>
            ))}

            <Divider className={classes.divider} />
          </React.Fragment>
        ))}
      </List>
    </Drawer>
  );
}

Navigator.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Navigator);