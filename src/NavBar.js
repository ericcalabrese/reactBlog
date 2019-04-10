import React, { Component } from 'react';
import '../public/NavBar.css';


export default class NavBar extends Component {
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

	render () {
		return(
			<div>
			    <nav className="navbar navbar-inverse">
				  <div className="container-fluid">
				    <div className="navbar-header">
				      <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
				        <span className="icon-bar"></span>
				        <span className="icon-bar"></span>
				        <span className="icon-bar"></span>                        
				      </button>
				      <a className="navbar-brand" href="/">Eric's Blog</a>
				    </div>
				    <div className="collapse navbar-collapse" id="myNavbar">
				      <ul className="nav navbar-nav">
				        <li>
			                <a type="submit" data-toggle="modal" data-target="#myModal">Write</a> 
			            </li>
			            <li>
			        	    <a href="mailto:calabrese.eric@gmail.com">Contact</a>
			            </li>
				      </ul>
				    </div>
				  </div>
				</nav>

			    <div id="myModal" className="modal fade" role="dialog">
		  			<div className="modal-dialog">
						<div className="modal-content">
					      	<div className="modal-header">
							    <button type="button" className="close" data-dismiss="modal">&times;</button>
						        <h4 className="modal-title">Write a New Post</h4>
						    </div>
						    <div className="modal-body">
	                            <form onSubmit={this.onSubmit}>
									<div>
										<input className="box"
											name="title"
											type="text"
											placeholder="Add a title..."
										/>
									</div>
									<div>
										<textarea className="box" name="body" placeholder="Write your post..."></textarea>
									</div>
									<button className="btn btn-primary" data-dismiss="modal">Send</button>
								</form>		    
							</div>
					    </div>
					</div>
				</div>
			</div>
		);
	}
}