import React from 'react';
// import Button from '@material-ui/core/Button';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import MuiProviders from './mui/mui-providers';
import HomePage from './pages/home-page';
import LeetCodePage from './pages/leet-code-page';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/leetCode">
            <LeetCodePage />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </div>
    </Router>
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
