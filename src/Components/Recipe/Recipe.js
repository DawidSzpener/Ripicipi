import React, { Component } from 'react'
import './Recipe.css'
import Aux from '../../hoc/Aux'
import Time15 from '../../assets/pictures/15minutes.png'
import Time30 from '../../assets/pictures/30minutes.png'
import Time60 from '../../assets/pictures/60minutes.png'
import Easy from '../../assets/pictures/easy.png'
import Medium from '../../assets/pictures/medium.png'
import Hard from '../../assets/pictures/hard.png'
import Keto from '../../assets/pictures/keto.png'
import NoKeto from '../../assets/pictures/ketofalse.png'
import ingTitle from '../../assets/pictures/ingTitle.png'
import metTitle from '../../assets/pictures/metTitle.png'

class Recipe extends Component {
  state = {
    title: this.props.title,
    background: this.props.picture,
    ingredients: this.props.ingredients,
    preparation: this.props.preparatio,
    keto: this.props.keto,
    time: this.props.time,
    difficulty: this.props.difficulty,
    category: this.props.category,
    loading: true,
    creatorsName: this.props.creatorsName,
    creatorsPicture: this.props.creatorsPicture
  }

  componentDidMount() {
    this.setState({ 
      loading: false,
      ingredients: this.props.ingredients,
      preparation: this.props.preparation,
      title: this.props.title,
      background: this.props.picture,
      keto: this.props.keto,
      time: this.props.time,
      difficulty: this.props.difficulty,
      category: this.props.category})
  }

  render() {

    let ingredients = null
    let preparations = null
    let keto = <div className='ketoContainer' style={{backgroundImage: `url(${NoKeto})`}}></div>
    let time = null
    let difficulty = null

    if(this.state.time === '15 minutes') {
      time = <div className='timeContainer' style={{backgroundImage: `url(${Time15})`}}></div>
    } else if (this.state.time === '30 minutes') {
      time = <div className='timeContainer' style={{backgroundImage: `url(${Time30})`}}></div>
    } else {
      time = <div className='timeContainer' style={{backgroundImage: `url(${Time60})`}}></div>
    }

    if(this.state.difficulty === 'easy') {
      difficulty = <div className='difficultyContainer' style={{backgroundImage: `url(${Easy})`}}></div>
    } else if (this.state.difficulty === 'moderate') {
      difficulty = <div className='difficultyContainer' style={{backgroundImage: `url(${Medium})`}}></div>
    } else {
      difficulty = <div className='difficultyContainer' style={{backgroundImage: `url(${Hard})`}}></div>
    }

    if(this.state.keto) {
      keto = 
      <div className='ketoContainer' style={{backgroundImage: `url(${Keto})`}}></div>
    }
    
    if (!this.state.loading) {
      ingredients = 
      <ol>
        {this.state.ingredients.map(ingredient => {
          return <li key={ingredient}>{ingredient}</li>
        })}
      </ol>

      preparations = 
      <ol>
      {this.state.preparation.map(step => {
        return <li key={step}>{step}</li>
      })}
      </ol>
    }

    return (   
      <Aux>
        <div className='Recipe'>
          <p className='RecipeTitle'>{this.state.title.toUpperCase()}</p>
          <img src={this.state.background} alt="card_bg"></img>
        </div>
        <div className='RecipeCredentials'>
          {keto}
          {time}
          {difficulty}
        </div>
        <div className='RecipeIngredients'>
          <div className='SingleRecipeTitle'><img src={ingTitle} alt='error'/></div>
          {ingredients}
        </div>
        <div className='RecipeInstructions'>
        <div className='SingleRecipeTitle'><img src={metTitle} alt='error'/></div>
          {preparations}
        </div>
      </Aux>
    )
  }
}

export default Recipe