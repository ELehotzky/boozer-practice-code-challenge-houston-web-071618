import React from 'react'
import CocktailsContainer from "./CocktailsContainer.js"

const CocktailDisplay = (props) => {

	const getCocktailIngredients = () => {
		let displayedCocktailProps = props.proportions.filter(proportion => proportion.cocktail_id === props.displayedCocktail.id)
		let displayedCocktailIng = displayedCocktailProps.map(dci => props.ingredients.find(i => i.id === dci.ingredient_id))
		return displayedCocktailIng
	}

	const getCocktailProportions = () => {
		let displayedCocktailProps = props.proportions.filter(proportion => proportion.cocktail_id === props.displayedCocktail.id)
		console.log(displayedCocktailProps)
		return displayedCocktailProps
	}

	const cleanDetails = () => {
		let props = getCocktailProportions();
		let ings = getCocktailIngredients();

		return props.map((p, i) => (
			<p key={p.id}>{p.amount} - {ings[i].name}</p>)
			)
	}

  return (
    <div id="cocktail-display">
		<h1>{props.displayedCocktail.name}</h1>
		<h3>{props.displayedCocktail.description}</h3>
		<p>Instructions: {props.displayedCocktail.instructions}</p>
		<div>
		Ingredients: {cleanDetails()}
		</div>
    </div>
  )
}

export default CocktailDisplay
