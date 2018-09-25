import React from 'react'
// import CocktailsContainer from "./CocktailsContainer.js"
// import CocktailsContainer from "./CocktailsContainer.js"

const CocktailDisplay = (props) => {

  return (
    <div id="cocktail-display">
		<h1>{props.displayedCocktail}</h1>
		<h3>{/* Cocktail Description */}</h3>
		<p>{/* Cocktail Instructions */}</p>
    </div>
  )
}

export default CocktailDisplay
