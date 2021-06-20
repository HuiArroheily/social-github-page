import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../theme/index';

export default function MuiProviders({ children }) {
  return (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  );
}

MuiProviders.propTypes = {
  children: PropTypes.node.isRequired,
};
