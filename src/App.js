import React from 'react'
import { withRouter } from 'react-router-dom'
import CssBaseline from "@mui/material/CssBaseline";

import routes from './routes';

function App() {
  return (
    <div>
      <CssBaseline />
      {routes}
    </div>
  );
}

export default withRouter(App);
