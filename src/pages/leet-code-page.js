import React from 'react';
import { makeStyles } from '@material-ui/core';
import NestedList from '../containers/leet-code/nested-list';
import LeetCode from '../containers/leet-code';

const useStyles = makeStyles((theme) => ({
  root: {
    ...theme.flex.mainStart,
    width: '100%',
    height: '100vh',
  },
  nestedListRoot: {
    height: '100vh',
    backgroundColor: theme.colors.timberWolf,
  },
}), { name: 'LeetCodePage' });

function LeetCodePage() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.nestedListRoot}>
        <NestedList />
      </div>
      <LeetCode />
    </div>
  );
}

export default LeetCodePage;
