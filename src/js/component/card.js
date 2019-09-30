import React from "react";

//create your first component
export class Card extends React.Component {
	render() {
		return (
			<div className="col-md-2 col-lg-2 col-sm-12 mt-3">
				<div className="card">
					<img src="" className="card-img-top" />
					<div className="card-body">
						<h5 className="card-title">Card title</h5>
						<p className="card-text">contenido</p>
						<a
							href="#"
							className="btn btn-primary col-md-12 col-lg-12 col-sm-12"
						/>
					</div>
				</div>
			</div>
		);
	}
}
