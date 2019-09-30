import React from "react";

//include images into your bundle
import arturito from "../../img/arturito1.jpg";

//create your first component
export class Card extends React.Component {
	render() {
		return (
			<div className="mt-3">
				<div className="card">
					<img src={arturito} className="card-img-top" />
					<div className="card-body">
						<h5 className="card-title">Planet or Character Name</h5>
						<p className="card-text">Database</p>
					</div>
				</div>
			</div>
		);
	}
}
