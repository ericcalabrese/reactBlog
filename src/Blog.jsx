import React, { Component } from 'react';
import BlogForm from './BlogForm';
import Edit from './Edit';
import Delete from './Delete';
import axios from 'axios';
import BlogSearch from './BlogSearch';
import Footer from './Footer';


class Blog extends Component {
	constructor(props) {
		super(props);

		this.posts = [];

		this.state = {
			value: props.startValue,
			posts: this.posts,
			test: [],
			edit: {

			}
		}

		this.addNewStatus = this.addNewStatus.bind(this);
		this.onDelete = this.onDelete.bind(this);
		this.onEdit = this.onEdit.bind(this);

	}

	

	addNewStatus(newStatus) {
		axios.post("https://floating-plains-75090.herokuapp.com/post", {
			title: newStatus.title,
			body: newStatus.body
		}).then(function(response) {
			console.log(response)
			let data = {
				title: response.data.title,
				body: response.data.body,
				id: response.data.id
			}
			
			this.posts.push(data);

			this.setState({
				posts: this.posts
			});
			
		}.bind(this));

	}

	componentDidMount() {
		axios.get("https://floating-plains-75090.herokuapp.com/blog")
		.then(function(response) {
			this.posts = response.data.post
			this.setState({
				posts: response.data.post
			});
			
		}.bind(this))
		
	}

	onDelete(id) {
		// e.preventDefault();
		console.log(id)
		axios.delete("https://floating-plains-75090.herokuapp.com/posts/"+id+"/delete")
			.then(function(response){
				console.log(response)
				this.setState({
					posts: response.data
				});
			}.bind(this))					
	}

	onEdit(id){
		console.log(id);
		this.setState({
			edit: this.state.posts[id]
		});
		axios.post("https://floating-plains-75090.herokuapp.com/post/"+id+"/edit", {
			title: id.title,
			body: id.body
		}).then(function(response) {

			let data = {
				title: response.data.title,
				body: response.data.body,
				id: response.data.id
			}
			
			this.edit.push(data);
			console.log("Hi" + data.response.title);
			this.setState({
				edit: data
			});
			
		}.bind(this));
	}
	

	render() {
		return (
			<div className="container">
        		<div className="row">
	            
	             <hr></hr>

		            <div className="col-md-8">
		            	<BlogForm addNewStatus={this.addNewStatus}/>
							{
								this.state.posts.map((post,i) => {
									return <div className="col-md-8" key={"item-" + (i + 1)}>
												<h2>{post.title}</h2>
												<h4>{post.body}</h4>
												<Edit edit={this.onEdit}  index={i}/>
												<br></br>
												<Delete delete={this.onDelete} index={post.id}/>
											</div>
								}).reverse()
							}
            		</div>
            		<div className="col-md-4">
            			<BlogSearch />
            		</div>
            	</div>
            	<Footer />
            </div>	
		);
	}
}

export default Blog;