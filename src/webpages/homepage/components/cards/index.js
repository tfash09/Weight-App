import React from 'react';
import styles from './cards.module.scss';
import HomeIcon from '@mui/icons-material/Home';
import LinearProgress from '@mui/material/LinearProgress';
import Box from '@mui/material/Box';
import WatchIcon from '@mui/icons-material/Watch';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';

export default function CardList() {
    
    return (
        <div className={styles.cardContainer}>
            <div className={styles.card}>
                <LocalFireDepartmentIcon className={styles.icon} htmlColor="#7B66FF"/>
                <div className={styles.details}>
                    <h3>866</h3>
                    <p>calories burn</p>
                    <Box style={{ width: '100%', mr: 1 }}>
                        <LinearProgress variant="determinate" color="inherit" value={50} className={styles.progress} />
                    </Box>
                </div>
            </div>
            <div className={styles.card}>
                <DirectionsRunIcon className={styles.icon} htmlColor="#7B66FF"/>
                <div className={styles.details}>
                    <h3>7579</h3>
                    <p>Steps</p>
                    <Box style={{ width: '100%', mr: 1 }}>
                        <LinearProgress variant="determinate" color="inherit" value={80} className={styles.progress} />
                    </Box>
                </div>

            </div>
            <div className={styles.card}>
                <WatchIcon className={styles.icon} htmlColor="#7B66FF"/>
                <div className={styles.details}>
                    <h3>27 <span>mins</span></h3>
                    <p>Left today</p>
                    <Box style={{ width: '100%', mr: 1 }}>
                        <LinearProgress variant="determinate" color="inherit" value={70} className={styles.progress} />
                    </Box>
                </div>

            </div>

        </div>        
    )
}