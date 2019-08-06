import React from 'react';

import './NavigationItems.scss';
import NavigationItem from './NavigationItem';

const navigationItems = () => (
    <ul className="NavigationItems">
        <NavigationItem link="/" active>Burger Builder</NavigationItem>
        <NavigationItem link="/">Check out</NavigationItem>
    </ul>
);

export default navigationItems;