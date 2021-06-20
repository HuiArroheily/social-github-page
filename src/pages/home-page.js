import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BIRD from './images/bird.png';
import ButtonBase from '../component/button';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: '100%',
    backgroundColor: theme.colors.orange,
  },
  bg: {
    width: '100%',
    height: '100%',
  },
  mainContent: {
    ...theme.flex.center,
    backgroundImage: `linear-gradient(${theme.colors.orange}, ${theme.colors.white})`,
    height: 400,
  },
}));

function HomePage() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <img className={classes.bg} src={BIRD} alt="expired" />
      <div className={classes.mainContent}>
        <ButtonBase>
          Hello Welcome Movie World
        </ButtonBase>
      </div>
    </div>
  );
}

export default HomePage;
