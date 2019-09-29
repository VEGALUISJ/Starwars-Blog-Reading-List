import React from "react";

//include images into your bundle
import starlogo from "../../img/star-wars-logo2.png";

//create your first component
export class Navbar extends React.Component {
	render() {
		return (
			<nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
				<div className="tittle">
					<a className="navbar-brand" href="#">
						<img src={starlogo} width="250" height="125" alt="" />
					</a>
					<button
						className="navbar-toggler"
						type="button"
						data-toggle="collapse"
						data-target="#navbarResponsive"
						aria-controls="navbarResponsive"
						aria-expanded="false"
						aria-label="Toggle navigation">
						<span className="navbar-toggler-icon" />
					</button>
				</div>
				<div className="buttons">
					<div
						className="collapse navbar-collapse"
						id="navbarResponsive">
						<ul className="navbar-nav ml-auto">
							<li className="nav-item active">
								<a className="nav-link" href="#">
									Home |
									<span className="sr-only">(current)</span>
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">
									About |
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">
									Services |
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">
									Contact |
								</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		);
	}
}
