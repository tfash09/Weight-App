import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';

import styles from './index.module.scss'

import HistorySleepChart from '../historySleepChart';


export default function HistorySleep(){

    return(
        <>
        <Card id='weight-chart' className={styles.sleepchart}>
            <CardContent>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <div className={styles.title}>
                            <h5>Sleep</h5>
                        </div>
                    </Grid>
                </Grid>

                <Grid container spacing={2}>
                    <Grid item xs={2}>
                        <div className={styles.data}>
                            <h3>6<span>h</span><span></span>20<span>m</span></h3>
                        </div>
                    </Grid>

                    <Grid item xs={10} className={styles.chart}>
                        <HistorySleepChart />
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
        </>
    )
}