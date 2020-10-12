import React from 'react';
import {Card, CardContent, Typography, Grid, StylesProvider} from '@material-ui/core';
import CountUp from 'react-countup';
import styles from './Cards.module.css';
import cx from 'classnames';

const Cards = ({data:{confirmed,recovered,deaths,lastUpdate}}) => {


    if(!confirmed){
        return 'loading'
    }

    
    
    return (
        <div className={StylesProvider.container}>
                <Typography gutterBottom variant="h4" component="h2">Global</Typography>
            <Grid container spacking={3} justify="center">
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.infected)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Infected</Typography>
                        <Typography variant="h5">
                            <CountUp start={0} end={confirmed.value} duration={2.5} separator={","}>

                            </CountUp>
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Number of active cases of Covid 19</Typography>
                    </CardContent>

                </Grid>

                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.recovered)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Recovered</Typography>
                        <Typography variant="h5">
                        <CountUp start={0} end={recovered.value} duration={2.5} separator={","}>

                        </CountUp>
                            
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Number of recoveries from Covid 19</Typography>
                    </CardContent>

                </Grid>

                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.deaths)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Deaths</Typography>
                        <Typography variant="h5">
                        <CountUp start={0} end={deaths .value} duration={2.5} separator={","}>

                        </CountUp>  
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Number of deaths from Covid 19</Typography>
                    </CardContent>

                </Grid>

            </Grid>
            
        </div>
    );
};

export default Cards;