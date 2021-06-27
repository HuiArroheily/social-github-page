import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.colors.brandAction,
    borderRadius: theme.borderRadius.normal,
    color: theme.colors.white,
    fontSize: '1rem',

    '&:hover': {
      backgroundColor: theme.colors.brandActionBg,
    },
  },
  label: {
    textTransform: 'capitalize',
  },
}));

export default function ButtonBase(props) {
  const classes = useStyles();
  const { children, ...otherProps } = props;

  return (
    <Button
      classes={{ root: classes.root, label: classes.label }}
      variant="contained"
      {...otherProps}
    >
      {children}
    </Button>
  );
}

ButtonBase.propTypes = {
  children: PropTypes.node.isRequired,
};
