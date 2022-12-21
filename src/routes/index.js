import React, { lazy, Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import CircularProgress from '@mui/material/CircularProgress';

const HomePage = lazy(() => import('../webpages/homepage'));
const HistoryPage = lazy(() => import('../webpages/history'));


let routes = (
    <Suspense fallback={<CircularProgress color='secondary' />}>
        <Switch>
            <Route exact path= '/' component={HomePage} />
            <Route path='/history' component={HistoryPage} />
        </Switch>
    </Suspense>
);

export default routes;