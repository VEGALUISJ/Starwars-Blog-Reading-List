import React from "react";

//include images into your bundle

//import your own components
import { Navbar } from "./navbar.js";
import { Content } from "./content.js";

//create your first component
export class Home extends React.Component {
	render() {
		return (
			<React.Fragment>
				<div>
					<Navbar />
				</div>
				<div>
					<Content />
				</div>
			</React.Fragment>
		);
	}
}
