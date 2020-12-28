import React, {Component} from 'react';

export default class ItemStatusFilter extends Component {

	buttons = [
		{name: 'all', label: 'All'},
		{name: 'active', label: 'Active'},
		{name: 'done', label: 'Done'}
	];

	render() {

		const {onFilter, onFilterChange} = this.props; 

		const buttons = this.buttons.map(({name, label}) => {
			const isActive = onFilter === name;
			const clazz = isActive ? 'btn-info' : 'btn-outline-secondary'
			return (
				<button
					key={name}
					className={`btn ${clazz} btn-sm`}
					type="button"
					onClick={() => onFilterChange(name)}
				>
					{label}
				</button>
			);
		});

		return (
			<div className="btn-group">
				{buttons}
			</div>
		);
	}
}