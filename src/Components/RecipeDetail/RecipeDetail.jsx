import React, { useEffect, useState } from 'react';
import { getRecipeInfo } from '../../Services/Api';
import Spinner from 'react-bootstrap/Spinner';
import './RecipeDetail.css';
import IngredientList from '../IngredientList/IngredientList';

const RecipeDetail = ({foodId}) => {
  const [loading, setLoading] = useState(true)
  const [recipe, setRecipe] = useState({})
    useEffect(()=>{
        const fetchRecipe = async () => {
            try{
                const recipeInfo = await getRecipeInfo(foodId)
                setRecipe(recipeInfo)
            } catch (err) {
                console.log(err)
            } finally {
                setLoading(false)
            }
        }
        fetchRecipe();
    },[foodId])
  return (
    <>
    <div>
      <div className='recipeCard'>
        <h1 className='recipeName'>{recipe.title}</h1>
        <span className='recipeType'>{recipe.vegetarian ? '🟢 Vegetarian' : '🔴 Non-vegetarian'} {recipe.vegan && '🌱 Vegan'}</span>
        <img className='recipeImage' src={recipe.image}/>
        <div className='recipeDetails'>
          <span>
            <strong>⏰ {recipe.readyInMinutes} Minutes </strong>
          </span>
          <span>
            <strong>👪 Serves: {recipe.servings}</strong>
          </span>
          <span>
            <strong>＄{(recipe.pricePerServing/100).toFixed(2)} Per Serving</strong>
          </span>
        </div>
        <h2>Ingredients</h2>
        {loading ? 
            (<Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
            </Spinner>) : 
          <div className="ingredientList">
          {recipe.extendedIngredients.map((ingredient)=>{
          return <IngredientList ingredient={ingredient} key={ingredient.id}/>
          })}
          </div>
        }
        <h2>Instructions</h2>
        <div className='recipeInstructions'>
          <ol>
            {loading ? 
            (<Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
            </Spinner>) : 
            (recipe.analyzedInstructions[0].steps.map((step)=>(<li key={step.number}>{step.step}</li>)))
            } 
          </ol> 
        </div>
      </div>
    </div> 
    </>
  )
}

export default RecipeDetail;
