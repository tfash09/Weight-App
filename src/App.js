import React from 'react'
import { withRouter } from 'react-router-dom'
import CssBaseline from "@mui/material/CssBaseline";

import Routes from './routes';

function App() {
  return (
    <div>
      <CssBaseline />
      <Routes />
    </div>
  );
}

export default App;
