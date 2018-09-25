import React, { Component } from 'react'
import CocktailsList from './CocktailsList'
import CocktailDisplay from './CocktailDisplay'
import Form from './Form'

class CocktailsContainer extends Component {

	state = {
		drinks: [],
		displayedCocktail: null
	}	

	handleClick = (drink) => {
		// debugger
		this.setState(state => ({
			displayedCocktail: drink
		}))
		console.log(drink.name)
	}

	componentDidMount() {
		fetch("https://react-boozer-backend.herokuapp.com/api/v1/cocktails")
			.then(resp => resp.json())
			.then((data) => {
				this.setState({
					drinks: data
				})
			})
		}

	render(){
		return (
		  <div className="container">
		  	< CocktailsList drinks={this.state.drinks} displayedCocktail={this.handleClick} />
		  	< CocktailDisplay displayedCocktail={this.state.displayedCocktail} />
		  	< Form />
		  </div>
		)
		}
	}

export default CocktailsContainer
