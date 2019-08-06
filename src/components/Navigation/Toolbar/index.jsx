import React from 'react';
import './Toolbar.scss';
import NavigationItems from '../NavigationItems';
import Logo from '../../Logo';

const toolbar = ( props ) => (
    <header className="Toolbar">
        <div>MENU</div>
        <Logo height="80%"/>
        <nav className="DesktopOnly">
            <NavigationItems />
        </nav>
    </header>
);

export default toolbar;