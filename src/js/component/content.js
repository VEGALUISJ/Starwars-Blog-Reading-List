import React from "react";

//import your own components
import { Card } from "./card.js";
import { Bottom } from "./bottom.js";

//include images into your bundle

//create your first component
export class Content extends React.Component {
	constructor() {
		super();
		this.state = {
			characters: []
		};
	}

	componentDidMount() {
		fetch("https://swapi.co/api/people")
			.then(reponse => reponse.json())
			.then(({ result: characters }) => this.setState({ characters }));
	}

	render() {
		let characters = this.state.characters;
		console.log(characters);
		return (
			<div className="tittlebod">
				<div>
					<h2 className="tittlebrowser">Browse Databank //</h2>
				</div>
				<div className="tittlegrid1">
					<h3 className="h1grid1">Characters //</h3>
				</div>
				<div className="container">
					<div className="row">
						<div className="card-deck">
							<Card content="this is a test" />
							<Card />
							<Card />
							<Card />
							<Card />
							<Card />
							<Card />
							<Card />
							<Card />
							<Card />
						</div>
					</div>
				</div>
				<div className="tittlegrid2">
					<h3 className="h1grid2">Planets //</h3>
				</div>
				<div className="container">
					<div className="row">
						<div className="card-deck">
							<Card />
							<Card />
							<Card />
							<Card />
							<Card />
							<Card />
							<Card />
							<Card />
							<Card />
							<Card />
						</div>
					</div>
				</div>
				<Bottom />
			</div>
		);
	}
}
