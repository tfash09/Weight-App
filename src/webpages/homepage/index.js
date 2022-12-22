import React from 'react';

import ResponsiveAppBar from '../../components/navbar';
import BottomAppBar from '../../components/footerbar';
import CardList from './components/cards/index';
import Chart from './components/chart/index';
import Trending from './components/trending/index';

export default function Homepage() {
    
    return (
        <div>
            <ResponsiveAppBar />

            <CardList />

            <Chart />

            <Trending />

            <BottomAppBar />
        </div>        
    )
}