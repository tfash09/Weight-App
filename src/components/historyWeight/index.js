import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

import styles from './index.module.scss'

import HistoryWeightChart from '../historyWeightChart';

export default function HistoryWeight(){
    return(
        <>
        <Card id='weight-chart' className={styles.weightchart}>
            <CardContent>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <div className={styles.title}>
                            <h5>Weight</h5>
                        </div>
                    </Grid>
                </Grid>

                <Grid container spacing={2}>
                    <Grid item xs={2}>
                        <div className={styles.data}>
                            <h3>52,3<span>kg</span></h3>
                        </div>
                    </Grid>

                    <Grid item xs={9} className={styles.chart}>
                        <HistoryWeightChart />
                    </Grid>
                </Grid>
            </CardContent>
        </Card>

        </>
    )
}