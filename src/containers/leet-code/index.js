import React, { useState } from 'react';
import { makeStyles, Typography } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import ButtonBase from '../../component/button';

const useStyles = makeStyles(() => ({
  root: {
    padding: 32,
    width: '100%',
    height: '100vh',
  },
  actionContainer: {
    marginTop: 12,
  },
}), { name: 'LeetCode' });

function LeetCode() {
  const classes = useStyles();
  const { t } = useTranslation('leet-code');

  const [answer, setAnswer] = useState(0);
  const removeFunction = () => {
    const numbers = [1, 1, 1, 1, 1, 2, 2, 4, 4, 8, 8];
    let i = 0;

    for (let j = 0; j < numbers.length; j += 1) {
      if (numbers[i] !== numbers[j]) {
        i += 1;
        numbers[i] = numbers[j];
      }
    }
    setAnswer(i += 1);
  };

  return (
    <div className={classes.root}>
      <div>
        <Typography>Q: numbers = [1, 1, 1, 1, 1, 2, 2, 4, 4, 8, 8]</Typography>
        <Typography>A: 4, numbers = [1,2,4,8]</Typography>
        <div className={classes.actionContainer}>
          <ButtonBase size="small" onClick={removeFunction}>
            {t('result')}
          </ButtonBase>
          <ButtonBase size="small" onClick={() => { setAnswer(0); }}>
            {t('clear')}
          </ButtonBase>
          <ButtonBase size="small" onClick={() => { setAnswer(0); }}>
            {t('show_code')}
          </ButtonBase>
        </div>
        {answer}
      </div>
    </div>
  );
}

export default LeetCode;
