import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import image from '../../assets/images/2.jpg'
import CachedIcon from '@mui/icons-material/Cached';
import styles from './index.module.scss';
import BottomAppBar from '../../components/footerbar';
import Grid from '@mui/material/Grid';

import HistoryWeight from '../../components/historyWeight'



export default function History(){
    return (
        <div>
            <AppBar position="static" elevation={0} className={styles.appbar}>
                <Container maxWidth="xl">
                    <Toolbar disableGutters className={styles.toolbar}>

                        <Typography className={styles.title}
                            variant="h4"
                            noWrap
                            component="a"
                        >
                            History
                        </Typography>

                        <Box sx={{ flexGrow: 0 }}>
                            <IconButton className={styles.historybtn}>
                                <CachedIcon />
                            </IconButton>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>

            <Container maxWidth="sm">
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <div className={styles.date}>
                            <h3>Monday, 11 July</h3>
                        </div>
                    </Grid>
                </Grid>

                <HistoryWeight />

            </Container>

            <BottomAppBar />
        </div>        
    )
} 