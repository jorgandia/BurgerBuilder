import React from 'react';
import Aux from '../../hoc/Aux';

import './Layout.scss';

const layout = (props) => (
	<Aux>
		<div>Toolbar, SideDrawer, BackDrop</div>
		<main className="Content">{props.children}</main>
	</Aux>
);

export default layout;
