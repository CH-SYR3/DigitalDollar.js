import React, {  Component } from 'react';
import {  Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
import {  Container, Row, Col } from 'reactstrap';
import Paper from '@material-ui/core/Paper';

class Landing extends Component {
    render() {
        return(
            //Activity GRID
            <div style={{width: '190px', height: '500px', marginTop: '30px', marginLeft: '30px'}}>
                <Grid className="Activity-grid">
                    <Paper>
                        <Cell  style={{width: '190px', height: '500px'}}>
                            <h2>Activities</h2>
                        </Cell>
                    </Paper>
                </Grid>

                {/*Maps GRID*/}
                <div style={{width: '1045px', height: '500px', marginTop: '-500px', marginLeft: '250px'}}>
                    <Grid className="Maps-grid">
                        <Paper>
                            <Cell  style={{width: '1045px', height: '500px'}}>
                                <h2>Google Map</h2>

                            </Cell>
                        </Paper>
                    </Grid>


                    {/*Comments GRID*/}
                    <div style={{width: '1295px', height: 'auto', marginTop: '30px', marginLeft: '-250px'}}>
                        <Grid className="Comments-grid">
                            <Paper>
                                <Cell  style={{width: '1295px', height: 'auto'}}>
                                    <h2>Comments</h2>
                                </Cell>
                            </Paper>
                        </Grid>            
                    </div>
                </div>
            </div>
        )
    }
}
export default Landing;