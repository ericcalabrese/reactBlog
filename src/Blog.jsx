import React, { Component } from 'react';
// import BlogForm from './BlogForm';
import Edit from './Edit';
import Delete from './Delete';
import axios from 'axios';
import BlogSearch from './BlogSearch';
import Footer from './Footer';
import NavBar from './NavBar';

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
		axios.post("https://ericsreactblog.herokuapp.com/post", {
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
			console.log(post,i)
			
		}.bind(this));

	}

	componentDidMount() {
		axios.get("https://ericsreactblog.herokuapp.com/blog")
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
		axios.delete("https://ericsreactblog.herokuapp.com/posts/"+id+"/delete")
			.then(function(response){
				console.log('response: '+response)
				this.setState({
					posts: response.data
				});
				console.log('newPosts: '+this.setState.posts)
			}.bind(this))					
	}

	onEdit(id){
		console.log('editId: '+ id);

		this.state.posts.map((post,i) => {
			console.log(post,i)
			if(post.id === id.id) {
				this.setState({
					edit: post
				});
				console.log('hi')
				console.log(this.state.edit);
			}
		});
		

		axios.post("https://ericsreactblog.herokuapp.com/posts/"+id.id+"/edit", {
			title: id.title,
			body: id.body
		}).then(function(response) {
			console.log('new'+response);
			let data = {
				title: response.data.title,
				body: response.data.body,
				id: response.data.id
			}
			
			this.edit.push(data);
			console.log("dataPostCall" + data);
			this.setState({
				edit: data
			});
			
		})
		.catch(function(error) {
			console.log('error'+error)
		});

		// axios.post("https://ericsreactblog.herokuapp.com/post/"+id+"/edit", {
		// 	title: id.title,
		// 	body: id.body
		// }).then(function(response) {
		// 	console.log('new'+response);
		// 	let data = {
		// 		title: response.data.title,
		// 		body: response.data.body,
		// 		id: response.data.id
		// 	}
			
		// 	this.edit.push(data);
		// 	console.log("dataPostCall" + data);
		// 	this.setState({
		// 		edit: data
		// 	});
			
		// }.bind(this));
	}
	

	render() {
		return (
			<div>
				<NavBar addNewStatus={this.addNewStatus} />
				<div className="container">
	        		<div className="row">
			            <div className="col-md-8">
			            	{/* <BlogForm addNewStatus={this.addNewStatus}/> */}
								{
									this.state.posts.map((post,i) => {
										return <div className="col-md-8" key={"item-" + (post.id)}>
													<h2>{post.title}</h2>
													<h4>{post.body}</h4>
													 <Edit edit={this.onEdit}  index={post}/> 
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
            </div>
		);
	}
}

export default Blog;