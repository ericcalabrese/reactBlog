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
					<button className="btn btn-primary" type="submit" data-toggle="modal" data-target="#myModal" >Edit</button>
				</div>
				<div id="myModal" className="modal fade" role="dialog">
	  				<div className="modal-dialog">
					    <div className="modal-content">
					      	<div className="modal-header">
							        <button type="button" className="close" data-dismiss="modal">&times;</button>
							        <h4 className="modal-title">Edit Blog Post</h4>
						    </div>
						    <div className="modal-body">
                            	<input placeholder="Add new title..." type='text' name='title' rows="1" className="form-control" />
                         		<h4>Body:</h4>
                    			<form role="form">
                        			<div className="form-group">
                            			<textarea placeholder="Write" id='body' type='text' name='body' className="form-control" rows="3"> </textarea>
                        			</div>   
                        			<button type="submit" className="btn btn-primary" value="post" id='submit' onClick={this.clickEdit}>Submit</button>
                   				</form>			    
							</div>
						    <div className="modal-footer">
						    </div>
					    </div>
					</div>
				</div>
			</div>
		);
	}
}

export default Edit;