import * as React from 'react';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import styles from './header.module.scss';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';


function Header() {
  const navigate = useNavigate();
  return (
    <div className={styles.header}>
      <div style={{display: "flex"}}>
        <ArrowBackIosNewIcon onClick={() => navigate(-1)} />
        <Typography className={styles.title}
          variant="h4"
        >
          Add Weight
        </Typography>

      </div>
      <MenuIcon style={{ marginRight: "10px" }} />

    </div>
  );
}
export default Header;