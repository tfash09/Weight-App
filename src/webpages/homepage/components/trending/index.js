import React from 'react';
import styles from './trending.module.scss';
import DirectionsBikeIcon from '@mui/icons-material/DirectionsBike';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';




export default function Trending() {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h3><span style={{float: "left"}}>Trending Workouts</span><span className={styles.number}>see all</span></h3>
                <div style={{clear: "both"}}></div>
            </div>

            <div className={styles.content}>
                <div style={{display: "flex"}}>
                    <DirectionsBikeIcon className={styles.icon} htmlColor="#7B66FF"/>
                    <h4>Muscle Builder</h4>
                </div>
                <PlayCircleOutlineIcon className={styles.icon} htmlColor="#C2FE4D" fontSize='large'/>
            </div>
        </div>        
    )
}