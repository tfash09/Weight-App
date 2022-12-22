import React from 'react';

import ResponsiveAppBar from '../../components/navbar';
import BottomAppBar from '../../components/footerbar';
import CardList from './components/cards/index'

export default function Homepage() {
    
    return (
        <div>
            <ResponsiveAppBar />

            <CardList />
            
            <BottomAppBar />
        </div>        
    )
}