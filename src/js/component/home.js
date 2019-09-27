import React from "react";

//include images into your bundle

//import your own components
import { Navbar } from "./navbar.js";

//create your first component
export class Home extends React.Component {
	render() {
		return (
			<div>
				<Navbar />
			</div>
		);
	}
}
