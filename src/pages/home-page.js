import React from 'react';
import { makeStyles } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '../component/button';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: '100%',
    backgroundColor: theme.colors.timberWolf,
  },
  bg: {
    width: '100%',
    height: '100%',
  },
  mainContent: {
    ...theme.flex.center,
    height: '100vh',
  },
  colorsDimGray: {
    width: '20%',
    height: '100%',
    backgroundColor: theme.colors.dimGray,
  },
  colorsRocketMetallic: {
    width: '20%',
    height: '100%',
    backgroundColor: theme.colors.rocketMetallic,
  },
  colorsTimberWolf: {
    width: '20%',
    height: '100%',
    backgroundColor: theme.colors.timberWolf,
  },
  colorsTan: {
    width: '20%',
    height: '100%',
    backgroundColor: theme.colors.tan,
  },
  colorsRust: {
    width: '20%',
    height: '100%',
    backgroundColor: theme.colors.rust,
  },
  buttonContainer: {
    position: 'absolute',
  },
  font: {
    color: theme.colors.dimGray,
  },
  fontContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    textAlign: 'center',
    backgroundColor: theme.colors.white03,
  },
}));

function HomePage() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.mainContent}>
        <div className={classes.colorsDimGray} />
        <div className={classes.colorsRocketMetallic} />
        <div className={classes.colorsTimberWolf} />
        <div className={classes.colorsTan} />
        <div className={classes.colorsRust} />
        <div className={classes.buttonContainer}>
          <ButtonBase size="large" href="/social-github-page/leetCode">
            Hello Welcome Movie World
          </ButtonBase>
        </div>
        <div className={classes.fontContainer}>
          <Typography variant="h6" className={classes.font}>
            All Colors Design Inspiration Form Pixar Animation Studios
          </Typography>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
