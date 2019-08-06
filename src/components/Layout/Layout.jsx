import React from 'react';
import Aux from '../../hoc/Auxiliar';
import Toolbar from '../Navigation/Toolbar';
import SideDrawer from '../Navigation/SideDrawer';

import './Layout.scss';

const layout = (props) => (
	<Aux>
		<Toolbar />
		<SideDrawer />
		<main className="Content">{props.children}</main>
	</Aux>
);

export default layout;
