import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import React from 'react';



export default props =>
    <Grid container tyle={{paddingTop: 500}}>
        <Grid item sm>
            <Paper style={{padding: 20, marginLeft: 30, paddingTop: 500, marginRight: 548, marginTop: 30, marginBottom: 10}}>
                Activity pane 
            </Paper>
        </Grid>
            <Grid item sm>
                <Paper style={{padding: 20, paddingTop: 500, marginLeft: -488, marginRight: 30, marginTop: 30, marginBottom: 10}}>
                maps pane
                </Paper>
            </Grid>
        <Grid container>
            <Grid item sm>
                <Paper style={{padding: 20, paddingTop: 100, marginLeft: 30, marginRight: 30, marginTop: 30, marginBottom: 10}}>
                    Comments pane 
                </Paper>
            </Grid>
        </Grid> 
    </Grid>