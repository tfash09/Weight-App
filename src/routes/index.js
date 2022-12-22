import React, { lazy, Suspense } from 'react';
import {
    BrowserRouter,
    Routes,
    Route,
  } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';

const HomePage = lazy(() => import('../webpages/homepage'));
const HistoryPage = lazy(() => import('../webpages/history'));

export default function Index() {
    return (
    <Suspense fallback={<CircularProgress color='secondary' />}>
            <BrowserRouter>
                <Routes>
                    <Route exact path= '/' element={<HomePage  />} />
                    <Route path='/history' element={<HistoryPage />} />
                </Routes>
             </BrowserRouter>
    </Suspense>
);
}
