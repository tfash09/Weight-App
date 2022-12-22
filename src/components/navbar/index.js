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

import styles from './navbar.module.scss';


function ResponsiveAppBar() {

  return (
    <AppBar position="static" elevation={0} className={styles.appbar}>
      <Container maxWidth="xl">
        <Toolbar disableGutters className={styles.toolbar}>

          <Typography className={styles.title}
            variant="h4"
            noWrap
            component="a"
          >
            My Activity
          </Typography>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton>
                <Avatar alt="Remy Sharp" src={image} />
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;