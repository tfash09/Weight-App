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
import { useNavigate, useLocation, Link } from 'react-router-dom';
import Popover from '@mui/material/Popover';
import styles from './footbar.module.scss';
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';
import InventoryIcon from '@mui/icons-material/Inventory';
import DirectionsBikeIcon from '@mui/icons-material/DirectionsBike';
import WatchIcon from '@mui/icons-material/Watch';



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
    const location = useLocation();
    const currentLocation = location.pathname;
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {

      setAnchorEl(anchorEl == null ? event.currentTarget : null);
    };

    const handleClose = () => {
      setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;
  

    return (
    <React.Fragment>
      <CssBaseline />
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        style={{position: "static", marginTop: "100%"}}
      >
        <div className={styles.modalContainer}>
            <div className={styles.card}>
              <MonitorHeartIcon htmlColor="#7B66FF" />
              <h4>Add blood pressure</h4>
            </div>
            <Link
              to="/add-weight"
              className="aside-tab-item"
            >
              <div className={styles.card}>
                <InventoryIcon htmlColor="#7B66FF" />
                <h4>Add weight measurement</h4>
              </div>
            </Link>
            <div className={styles.card}>
              <DirectionsBikeIcon htmlColor="#7B66FF" />
              <h4>Add activity</h4>
            </div>
            <div className={styles.card}>
              <WatchIcon htmlColor="#7B66FF" />
              <h4>Track my workout</h4>
            </div>
        </div>
      </Popover>      

      {/* <Paper square sx={{ pb: '50px' }}>


      </Paper> */}
      <AppBar position="fixed" elevation={0} sx={{ top: 'auto', bottom: 0 }} className={styles.appbar}>
        <Toolbar className={styles.toolbar}>
          <IconButton style={{color: currentLocation == "/" ? "#7B66FF" : "inherit"}} aria-label="open drawer" onClick={() => navigateTo('/')}>
            <HomeIcon />
          </IconButton>
          <IconButton style={{color: currentLocation == "/history" ? "#7B66FF" : "inherit"}} aria-label="open drawer" onClick={() => navigateTo('/history')}>
            <BarChartIcon />
          </IconButton>
          <StyledFab aria-label="add" aria-describedby={id} variant="contained" onClick={handleClick} className={styles.fabbutton}>
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
