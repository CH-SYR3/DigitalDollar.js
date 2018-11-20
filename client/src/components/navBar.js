import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
// eslint-disable-next-line
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
// eslint-disable-next-line
import ListItem from '@material-ui/core/ListItem';
// eslint-disable-next-line
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';

const drawerWidth = 250;

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
  },
  toolbar: theme.mixins.toolbar,
});

function ClippedDrawer(props) {
  const { classes } = props;


  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            DigitalDollar
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer className={classes.drawer} variant="permanent" classes={{paper: classes.drawerPaper,}}>
        <div style={{marginTop: '50px'}}>
        <img 
          src="http://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png"
          alt="avatar"
          style={{height: '230px', width: '230px'}}
        />
        </div>
        <Divider />
        {
        <List>
          {['Enter Code'].map((text, index) => (
            <ListItem button key={text}>
              
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        }
        <Button variant="contained" size="large" color="primary" className={classes.button} style={{marginTop: '30px'}}>
          Buy Me a Coffe
        </Button>
        
        </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        
      </main>
    </div>
  );
}

ClippedDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ClippedDrawer);