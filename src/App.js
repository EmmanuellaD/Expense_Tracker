import React from 'react';
import Details from './components/Details/Details'
import {Grid} from '@material-ui/core'
import  useStyles from './styles'

function app() {
    const classes = useStyles();
    return (
        <div>
            <Grid className= {classes.Grid} container spacing={0} alignItems="center" justify="center" style ={{ height: '100vh'}}>
            <Grid item xs={12} sm={4}>
                <Details />
            </Grid>
            <Grid item xs={12} sm={4}>
                Main
            </Grid>
            <Grid item xs={12} sm={4}>
                <Details />
            </Grid>
            </Grid>

        </div>
    );
}

export default app
