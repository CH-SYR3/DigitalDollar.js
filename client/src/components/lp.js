import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class lp extends Component {
    render() {
        return(
            <div style={{width: '100', margin: 'auto'}}>
               {/*LANDING PAGE GRID*/}
                <Grid className="landing-grid">
                    <Cell col={12}>

                        {/*AVATAR IMG*/}
                        <img 
                            src="https://canime.files.wordpress.com/2010/05/mask-dtb.jpg"
                            alt="avatar"
                            className="avatar-img"
                            />

                    
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default lp;