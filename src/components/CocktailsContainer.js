import React, { Component } from 'react'
import CocktailsList from './CocktailsList'
import CocktailDisplay from './CocktailDisplay'
import Form from './Form'

class CocktailsContainer extends Component {

	state = {
		drinks: [],
		ingredients: [],
		proportions: [],
		displayedCocktail: null
	}	

	handleClick = (drink) => {
		this.setState(state => ({
			displayedCocktail: drink
		}))
	}

	componentDidMount() {
		fetch("https://react-boozer-backend.herokuapp.com/api/v1/cocktails")
			.then(resp => resp.json())
			.then((data) => {
				this.setState({
					drinks: data
				})
			})

		fetch("https://react-boozer-backend.herokuapp.com/api/v1/ingredients")
			.then(resp => resp.json())
			.then((data) => {
				this.setState({
					ingredients: data
				})
			})

		fetch("https://react-boozer-backend.herokuapp.com/api/v1/proportions")
			.then(resp => resp.json())
			.then((data) => {
				this.setState({
					proportions: data
				})
			})
		}

	render(){
		return (
		  <div className="container">
		  	< CocktailsList drinks={this.state.drinks} handleClick={this.handleClick} />
		  	{this.state.displayedCocktail ? 
		  		< CocktailDisplay displayedCocktail={this.state.displayedCocktail} ingredients={this.state.ingredients} proportions={this.state.proportions} /> 
		  		: <p>Select a drink</p>}
		  	< Form />
		  </div>
		)
		}
	}

export default CocktailsContainer
