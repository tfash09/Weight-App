import * as React from 'react';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import HomeIcon from '@mui/icons-material/Home';
import BarChartIcon from '@mui/icons-material/BarChart';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import { useNavigate } from 'react-router-dom';

import styles from './footbar.module.scss'




const StyledFab = styled(Fab)({
  position: 'absolute',
  zIndex: 1,
  top: -30,
  left: 0,
  right: 0,
  margin: '0 auto',
});

export default function BottomAppBar() {

    const navigateTo = useNavigate();

  return (
    <React.Fragment>
      <CssBaseline />
      {/* <Paper square sx={{ pb: '50px' }}>


      </Paper> */}
      <AppBar position="fixed" elevation={0} sx={{ top: 'auto', bottom: 0 }} className={styles.appbar}>
        <Toolbar className={styles.toolbar}>
          <IconButton color="inherit" aria-label="open drawer" onClick={() => navigateTo('/')}>
            <HomeIcon />
          </IconButton>
          <IconButton color="inherit" aria-label="open drawer" onClick={() => navigateTo('/history')}>
            <BarChartIcon />
          </IconButton>
          <StyledFab aria-label="add" onClick={() =>alert('hello')} className={styles.fabbutton}>
            <AddIcon />
          </StyledFab>
          <Box sx={{ flexGrow: 1 }} />
          <IconButton color="inherit">
            <ChatBubbleOutlineIcon />
          </IconButton>
          <IconButton color="inherit">
            <PersonOutlineIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}
