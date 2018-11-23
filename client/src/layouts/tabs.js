import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Link } from 'react-router-dom';

import purple from '@material-ui/core/colors/purple';

const styles = theme => ({
    root: {
      flexGrow: 1,
      width: "100%",
      backgroundColor: theme.palette.background.paper
    },
    
    tabsIndicator: {
      backgroundColor: "purple"
    },
    tabRoot: {
      "&:hover": {
        color: "purple",
        opacity: 1
      },
      "&$tabSelected": {
        color: "purple",
        fontWeight: theme.typography.fontWeightMedium
      },
      "&:focus": {
        color: "purple"
      }
    },
    tabSelected: {
        color: "purple",
    }
  });



class CenteredTabs extends React.Component {
    state = {
        value: 0,
    };

    handleChange = (event, value) => {
        this.setState({ value });
    };

    render() {
        const { classes } = this.props;
        return (
        <Paper  style={{color: 'black'}} className={classes.root}>
            <Tabs classes={{ indicator: classes.tabsIndicator }}
            style={{background: '-webkit-linear-gradient(to right, #ece9e6, #ffffff)'
}}
                value={this.state.value}
                onChange={this.handleChange}
                centered
                >
                <Tab 
                Link to="/"
                value={0} 
                label="Map" 
                classes={{ root: classes.tabRoot, selected: classes.tabSelected}}
/>
                <Tab 
                value={1} 
                Link to=".//components/lp"
                label="Time" 
                classes={{ root: classes.tabRoot, selected: classes.tabSelected }}

                />
                <Tab 
                value={2} 
                label="Hello" 
                classes={{ root: classes.tabRoot, selected: classes.tabSelected }}

                />
            </Tabs>
        </Paper>
        
    );
}
}

CenteredTabs.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CenteredTabs);