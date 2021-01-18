import React from 'react'
import {Card, CardHeader, CardContent, Typography, Grid} from '@material-ui/core'
// import {Divider } from '@material-ui/core'
import useStyles from './styles'
import Form from './Form/Form'
import List from './List/List'

const Main = () => {
    const classes = useStyles();

    return (
        <Card className= {classes.root}>
            <CardHeader title = "Expense Tracker" />
            {/* // subheader= "Powered by Speechly"/> */}
            <CardContent>
                <Typography align="center" variant="h5">Total Balance $20</Typography>
                <Typography variant subtitle1 style={{ lineHeight: '1.5em', margin: '20px'}}>
                    {/* info */}
                    Try saying: Add income 
                </Typography>
                {/* <Divider> */}
                    <Form/>
                {/* </Divider> */}
            </CardContent>
            <CardContent className= {classes.CardContent}>
                <Grid  container spacing = {2}>
                    <Grid item xs={12}>
                        <List />
                    </Grid>

                </Grid>
            </CardContent>
        </Card>
    )
}

export default Main
