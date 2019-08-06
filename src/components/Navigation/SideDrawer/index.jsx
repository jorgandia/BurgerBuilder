import React from 'react';

import Logo from '../../Logo';
import NavigationItems from '../NavigationItems';
import './SideDrawer.scss';

const sideDrawer = (props) => {
  
    return (
        <div className="SideDrawer">
            <Logo height="11%" />
            <nav>
                <NavigationItems />
            </nav>
        </div>
    )
  };

export default sideDrawer;