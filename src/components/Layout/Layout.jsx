import React from 'react';
import Aux from '../../hoc/Auxiliar';
import Toolbar from '../Navigation/Toolbar';

import './Layout.scss';

const layout = (props) => (
	<Aux>
		<Toolbar />
		<main className="Content">{props.children}</main>
	</Aux>
);

export default layout;
