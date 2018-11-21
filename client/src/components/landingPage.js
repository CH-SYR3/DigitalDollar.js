import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';

class Contact extends Component {
    render() {
        return(

            <div className="contact-body"> 

                {/*CONTACT GRID*/}
                <Grid className="contact-grid">

                    {/*LEFT HALF PAGE CELL*/}
                    <Cell col={6}>
                    <h2>Camrone Hassell</h2>
                    
                    </Cell>
                    {/*RIGHT HALF PAGE CELL*/}
                    <Cell col={6}>
                        <h2>Contact Me</h2>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Contact;