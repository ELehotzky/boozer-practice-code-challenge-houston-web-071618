import React, { Component } from 'react'
// import Cocktail from './Cocktail'
import CocktailsContainer from "./CocktailsContainer.js"


class CocktailsList extends Component {

	render() {
		return (
			<div>
				<div id="cocktail-list">
					{this.props.drinks.map((drink) => (
					<p onClick={() => this.props.handleClick(drink)} key={drink.name}>{drink.name}</p>
					))}
				</div>
			</div>
		)
		}
	}

export default CocktailsList;
