import React from 'react';
import './IngredientList.css';

const IngredientList = ({ingredient}) => {
  return (
    <>
    <div className="ingredientItem">
      <img
        className="ingredientImage"
        src={`https://spoonacular.com/cdn/ingredients_100x100/${ingredient.name}`}
        alt={ingredient.name}
      />
      <div className="ingredientDetails">
        <p className="ingredientName">{ingredient.name}</p>
        <p className="ingredientAmount">
          {ingredient.amount} {ingredient.unit}
        </p>
      </div>
    </div>
    </>
  )
}

export default IngredientList