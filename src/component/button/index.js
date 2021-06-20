import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  mainBtn: {
    backgroundColor: theme.colors.brandAction,
    borderRadius: theme.borderRadius.normal,
    color: theme.colors.white,
    fontSize: '1rem',

    '&:hover': {
      backgroundColor: theme.colors.brandActionBg,
    },
  },
}));

export default function ButtonBase({ children }) {
  const classes = useStyles();

  return (
    <Button variant="contained" className={classes.mainBtn}>
      {children}
    </Button>
  );
}

ButtonBase.propTypes = {
  children: PropTypes.node.isRequired,
};
