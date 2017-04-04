import React, { Component } from 'react';

export default class NavBar extends Component {

	render () {
		return(
			<div>
				<nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
			        <div className="container">
			            <div className="navbar-header">
			                <a className="navbar-brand" href="/">Eric's Blog</a>
			            </div>
			            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
			                <ul className="nav navbar-nav">
			                    <li>
			                    	<a href="/create">Write</a> 
			                    </li>
			                    <li>
			                        <a href="mailto:calabrese.eric@gmail.com">Contact</a>
			                    </li>
			                </ul>
			            </div>
			        </div>
			    </nav>
			</div>
		);
	}
}