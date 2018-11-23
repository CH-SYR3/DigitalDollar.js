import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class lp extends Component {
    render() {
        return(
            <div style={{width: '100', margin: 'auto'}}>
               {/*LANDING PAGE GRID*/}
                <Grid className="landing-grid">
                    
                    <Cell col={12}>
.            <h1 style={{color: 'white'}}>This is the home page!</h1>

                        {/*AVATAR IMG*/}
                        <img 
                            src="https://canime.files.wordpress.com/2010/05/mask-dtb.jpg"
                            alt="avatar"
                            className="avatar-img"
                            />
                    </Cell>
                    <Cell col={12}>

                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default lp;