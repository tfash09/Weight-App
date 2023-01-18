import * as React from 'react';
import styles from './form.module.scss';
import Slider from '@appigram/react-rangeslider';
import '@appigram/react-rangeslider/lib/index.css';
import SettingsIcon from '@mui/icons-material/Settings';
import Button from '@mui/material/Button';

function Form() {
  const [weight, setweight] = React.useState(52.5);
  const [gender, setGender] = React.useState(2);

  return (
    <div className={styles.container}>
      <div className={styles.showWeight}> <h3>{weight}</h3></div>

      <div className={styles.slider}>
        <Slider
          min={0}
          max={100}
          step={0.1}
          value={weight} 
          onChange={(x)=> setweight(Math.round(x * 10) / 10)}
        />
      </div>

      <div className={styles.radioClass}>
        <div className={gender === 1 ? styles.activeGender : ''} onClick={() => setGender(1)}>Male</div>
        <div className={gender === 2 ? styles.activeGender : ''} onClick={() => setGender(2)}>Female</div>
      </div>

      <div className={styles.otherDetails}>
        <div className={styles.item}>
          <div className={styles.details}>
            <span>Age</span>
            <SettingsIcon  />
          </div>
          <h2>21</h2>
        </div>
        <div className={styles.item}>
          <div className={styles.details}>
            <span>Height</span>
            <SettingsIcon  />
          </div>
          <h2>173</h2>
        </div>
      </div>


      <div className={styles.saveButton}>
        <Button variant="contained">Save</Button>
      </div>


    </div>
  );
}
export default Form;