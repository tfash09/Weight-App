import React from 'react';

import ResponsiveAppBar from '../../components/navbar';
import BottomAppBar from '../../components/footerbar';

export default function Homepage() {
    
    return (
        <div>
            <ResponsiveAppBar />
            <h1>This is the homepage</h1>
            <p>This is the homepage now</p>
            <BottomAppBar />
        </div>        
    )
}