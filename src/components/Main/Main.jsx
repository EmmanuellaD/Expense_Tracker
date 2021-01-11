import React from 'react'
import {Card, CardHeader, CardContent, Typography, Grid, Divider} from '@material-ui/core'
import useStyles from './styles'
import Form from './Form/Form'

const Main = () => {
    const classes = useStyles();

    return (
        <Card className= {classes.root}>
            <CardHeader title = "Expense Tracker" subheader= "Powered by Speechly"/>
            <CardContent>
                <Typography align="center" variant="h5">Total Balance $20</Typography>
                <Typography variant subtitle1 style={{ lineHeight: '1.5em', margin: '20px'}}>
                    {/* info */}
                    Try saying: Add income 
                </Typography>
                <Divider>
                    <Form/>
                </Divider>
            </CardContent>
            <CardContent className= {classes.CardContent}>
                <Grid  container spacing = {2}>
                    <Grid item xs={12}>
                        {/* <List></List> */}
                    </Grid>

                </Grid>
            </CardContent>
        </Card>
    )
}

export default Main
