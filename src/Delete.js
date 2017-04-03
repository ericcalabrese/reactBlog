import React, { Component } from 'react';

class Delete extends Component {
	constructor(props) {
		super(props);

		this.clickDelete = this.clickDelete.bind(this);

	}

	clickDelete() {
		this.props.delete(this.props.index)
	}

	render() {
		return (
			<div className="Delete" onClick={this.clickDelete}>
				<button className="btn btn-primary">Delete</button>
			</div>
			);
	}
}

export default Delete;