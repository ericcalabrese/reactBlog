import React, { Component } from 'react';

export default class BlogCategories extends Component {

	render() {
		return (
            <div className="well">
                <h4>Blog Categories</h4>
    	            <div className="row">
    	                <div className="col-lg-6">
                            <ul className="list-unstyled">
                                <li>
                                	<a href="#">Music</a>
                                </li>
                                <li>
                                	<a href="#">Sports</a>
                                </li>
                                <li>
                                	<a href="#">New York Knicks</a>
                                </li>
                                <li>
                                	<a href="#">Guitar</a>
                                </li>
                                <li>
                                	<a href="#">Festivals</a>
                                </li>
                            </ul>
                        </div>
                    </div>
            </div>
		);
	}
}