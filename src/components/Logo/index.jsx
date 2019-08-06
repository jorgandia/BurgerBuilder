import React from 'react';

import burgerLogo from '../../assets/Images/burger-logo.png';
import './Logo.scss';

const logo = (props) => (
    <div className="Logo" style={{height: props.height}}>
        <img src={burgerLogo} alt="BurgerBuilder" />
    </div>
);

export default logo;