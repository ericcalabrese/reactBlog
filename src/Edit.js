import React, { Component } from 'react';

class Edit extends Component {
	constructor(props) {
		super(props);

		this.clickEdit = this.clickEdit.bind(this);

	}

	clickEdit() {
		console.log("hey" + this.props.index)
		this.props.edit(this.props.index)
	}

	render() {
		return (
			<div>
				<div>
					<button className="btn btn-primary" type="submit" data-toggle="modal" data-target="#myModal" onClick={this.clickEdit}>Edit</button>
				</div>
				<div id="myModal" className="modal fade" role="dialog">
	  				<div className="modal-dialog">
					    <div className="modal-content">
					      	<div className="modal-header">
							        <button type="button" className="close" data-dismiss="modal">&times;</button>
							        <h4 className="modal-title">Modal Header</h4>
						    </div>
						    <div className="modal-body">
									// <h2>{this.props.title}</h2>
									// <h4>{this.props.body}</h4>
									<h2>Hi</h2>			    
							</div>
						    <div className="modal-footer">
							    	<button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
						    </div>
					    </div>
					</div>
				</div>
			</div>
		);
	}
}

export default Edit;