import React, { Component } from 'react'
import Cocktail from './Cocktail'
import CocktailsContainer from "./CocktailsContainer.js"


class CocktailsList extends Component {

	// componentDidMount() {
	// 	fetch("https://react-boozer-backend.herokuapp.com/api/v1/cocktails")
	// 		.then(resp => resp.json())
	// 		.then((data) => {
	// 			this.setState({
	// 				drinks: data
	// 			})
	// 		})
	// 	}

	// handleClick = (drink) => {
	// 	this.setState(state => ({
	// 		displayedCocktail: drink
	// 	}))
	// 	console.log(drink.name)
	// }

	render() {
		return (
			<div>
				<div id="cocktail-list">
					{this.props.drinks.map((drink) => (
					<p onClick={() => this.handleClick(drink)}  key={drink.name}>{drink.name}</p>
					))}
				</div>
			</div>
		)
		}
	}

export default CocktailsList;
