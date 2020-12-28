import React from 'react';

import './app-header.css';

const AppHeader = ({toDo, done }) => {
	return (
		<div className="app-header">
			<h1 className="app-header__title">
				Todo List
			</h1>
			<div className="count">
				{toDo} more to do, {done} done
			</div>
		</div>
	);
};

export default AppHeader;