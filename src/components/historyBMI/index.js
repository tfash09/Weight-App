import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import styles from './index.module.scss'
import LinearProgress from '@mui/material/LinearProgress';
import CircleIcon from '@mui/icons-material/Circle';


export default function HistoryBMI(){
    return(
        <Card id='weightbmi' className={styles.weightbmi}>
            <CardContent>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <div className={styles.title}>
                            <h5>BMI</h5>
                            <div className={styles.figure}>
                                <h5>17.3</h5>
                                <ArrowDropUpIcon style={{color: '#7b66ff'}}/>
                            </div>
                        </div>
                    </Grid>
                </Grid>

                <Grid container spacing={2}>
                    <Grid item xs={4}>
                        <Box style={{ width: '100%', mr: 1 }}>
                            <LinearProgress variant="determinate" color="inherit" value={75} className={styles.progress} />
                            <div className={styles.data}>18.5</div>
                        </Box>
                    </Grid>
                    <Grid item xs={4}>
                        <Box style={{ width: '100%', mr: 1 }}>
                            <LinearProgress variant="determinate" color="inherit" value={0} className={styles.progress} />
                            <div className={styles.data}>25</div>
                        </Box>
                    </Grid>
                    <Grid item xs={4}>
                        <Box style={{ width: '100%', mr: 1 }}>
                            <LinearProgress variant="determinate" color="inherit" value={0} className={styles.progress} />
                        </Box>
                    </Grid>
                </Grid>

                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <div className={styles.options}>
                            <div className={styles.option1}>
                                <CircleIcon /> <span>Low</span>
                            </div>
                            <div className={styles.option2}>
                                <CircleIcon /> <span>Normal</span>
                            </div>
                            <div className={styles.option3}>
                                <CircleIcon /> <span>Hight</span>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}