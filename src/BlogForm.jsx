import React, { Component } from 'react';

class BlogForm extends Component {
	constructor(props) {
		super(props);

		this.onSubmit = this.onSubmit.bind(this);
	}

	onSubmit(e) {
		e.preventDefault();

		this.props.addNewStatus({
			title: e.target.title.value,
			body: e.target.body.value
		});

		e.target.title.value = " ";
		e.target.body.value = " ";
	}


	render() {
		return (
            <div className="col-md-8">
				<form onSubmit={this.onSubmit}>
					<h2>Blog Me!</h2>
					<div>
						<h4>Title</h4>
						<input 
							name="title"
							type="text"
							placeholder={this.props.startValue} 
						/>
					</div>
					<div>
						<h4>Body</h4>
						<textarea name="body"></textarea>
					</div>
					<button className="btn btn-primary">Send</button>
				</form>
			</div>
			);
	}
}

export default BlogForm;