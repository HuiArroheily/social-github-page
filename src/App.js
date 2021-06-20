import React from 'react';
// import Button from '@material-ui/core/Button';
import HomePage from './pages/home-page';
import MuiProviders from './mui/mui-providers';

function App() {
  return (
    <HomePage />
    // <Button variant="contained" color="primary">
    //   Hello World
    // </Button>
  );
}

function AppWithProvides() {
  return (
    <MuiProviders>
      <App />
    </MuiProviders>
  );
}

export default AppWithProvides;
