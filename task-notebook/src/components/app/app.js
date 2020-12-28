import React, {Component} from 'react';
import AppHeader from '../app-header';
import ItemAddForm from '../item-add-form';
import ItemStatusFilter from '../item-status-filter';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';

import './app.css';

export default class App extends Component {
	maxId = 100;

	state = {
		todoData: [
			this.createToDoItem('Drink Coffe'),
			this.createToDoItem('Make Awesome App'),
			this.createToDoItem('Have a lunch')
		],
		term: '',
		onFilter: 'done'
	};

	createToDoItem(label) {
		return {
			label,
			important: false,
			done: false,
			id: this.maxId++
		};
	};

	deleteItem = (id) => {
		this.setState(({todoData}) => {
			const idx = todoData.findIndex((el) => el.id === id);
			const newArray = [
				...todoData.slice(0, idx),
				...todoData.slice(idx + 1)
			];

			return {
				todoData: newArray
			};
		});
	};

	addItem = (text) => {
		const newItem = this.createToDoItem(text);

		this.setState(({todoData}) => {
			const newArray = [...todoData, newItem];

			return {
				todoData: newArray
			};
		});
	};

	togglePropertty = (arr, id, propName) => {
		const idx = arr.findIndex((el) => el.id === id);
		const oldItem = arr[idx];
		const newItem = {...oldItem, [propName]: !oldItem[propName]};
		return [
			...arr.slice(0, idx),
			newItem,
			...arr.slice(idx + 1)
		];
	};

	onToggleDone = (id) => {
		this.setState(({todoData}) => {
			return {
				todoData: this.togglePropertty(todoData, id, 'done')
			};
		});
	};

	onToggleImportant = (id) => {
		this.setState(({todoData}) => {
			return {
				todoData: this.togglePropertty(todoData, id, 'important')
			};
		});
	};

	onSearchChange = (term) => {
		this.setState({term});
	}

	onFilterChange = (onFilter) => {
		this.setState({onFilter});
	}

	search = (items, term) => {
		if (term.length === 0) {
			return items;
		}

		return items.filter((item) => {
			return item.label.toLowerCase().indexOf(term.toLowerCase()) > -1;
		});
	}

	onFilter(items, filter) {
		switch(filter) {
			case 'all':
				return items;
			case 'active':
				return items.filter((item) => !item.done);
			case 'done':
				return items.filter((item) => item.done);
			default: 
				return items;
		}
	}

	render() {
		const {todoData, term, onFilter} = this.state;
		const visibleItems = this.onFilter(this.search(todoData, term), onFilter);
		const doneCount = todoData.filter((el) => el.done).length;
		const todoCount = todoData.length - doneCount;

		return (
			<div className="wrapper">
				<AppHeader 
					toDo={todoCount} 
					done={doneCount} 
				/>
				<div className="top-nav">
					<SearchPanel 
						onSearchChange={this.onSearchChange}
					/>
					<ItemStatusFilter 
						onFilter={onFilter} 
						onFilterChange={this.onFilterChange}
					/>
				</div>
				<TodoList 
					todos={visibleItems} 
					onDeleted={this.deleteItem}
					onToggleImportant={this.onToggleImportant}
					onToggleDone={this.onToggleDone}
				/>
				<ItemAddForm onAdded={this.addItem} />
			</div>
		);
	}
}