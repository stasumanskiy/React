import React, {Component} from 'react';

import './item-add-form.css';

export default class ItemAddForm extends Component {
	state = {
		label: ''
	};

	onLabelChange = (e) => {
		this.setState({
			label: e.target.value
		});
	};

	onSubmit = (e) => {
		e.preventDefault();
		this.props.onAdded(this.state.label);
		this.setState({
			label: ''
		});
	};
	
	render() {
		return (
			<form 
				className="item-add-form"
				onSubmit={this.onSubmit}
			>
				<input 
					type="text" 
					onChange={this.onLabelChange}
					placeholder="What needs to be done"
					value={this.state.label}
				/>
				<div className="btn-group">
					<button 
						className="btn btn-sm btn-success"
						type="submit"
					>
						Add item
					</button>
				</div>
			</form>
		)
	}
}