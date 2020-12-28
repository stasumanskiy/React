import React, {Component} from 'react';

import './todo-list-item.css';

export default class TodoListItem extends Component {
	render() {
		const {
			label, 
			onDeleted, 
			onToggleImportant, 
			onToggleDone, 
			done, 
			important
		} = this.props;

		let className = 'todo-list-item';

		if (done) {
			className += ' done'; 
		}

		if (important) {
			className += ' important'; 
		}

		const style = {
			color: important ? 'steelblue' : 'black',
			fontWeight: important ? 'bold' : 'normal'
		};

		return (
			<div className={className}>
				<span 
				className="todo-list-item__text" 
				style={style}
				onClick={onToggleDone}
				>
					{label}
				</span>
				<div className="todo-list-item__btn btn-group">
					<button className="btn btn-outline-success btn-sm" 
					type="button"
					onClick={onToggleImportant}
					>
						<i className="fa fa-exclamation" />
					</button>
					<button className="btn btn-outline-danger btn-sm" 
					type="button"
					onClick={onDeleted}
					>
						<i className="fa fa-trash-o" />
					</button>
				</div>
			</div>
		);
	}
}