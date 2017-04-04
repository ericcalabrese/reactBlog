import React, { Component } from 'react';
import BlogCategories from './BlogCategories';
import AboutMe from './AboutMe';
import '../public/BlogSearch.css';



export default class BlogSearch extends Component {

	render() {
		return (
		<div className="container">
        	<div className="row">
                <div className="col-md-4">
                    <div className="searchSpacing well">
                        <h4>Blog Search</h4>
                        <div className="input-group">
                            <input type="text" className="form-control"/>
                            <span className="input-group-btn">
                                <button className="btn btn-default" type="button">
                                    <span className="glyphicon glyphicon-search"></span>
                            	</button>
                            </span>
                        </div>
                    </div>
                <BlogCategories />
                <AboutMe />
                </div>
            </div>
        </div>
			);
	}
}