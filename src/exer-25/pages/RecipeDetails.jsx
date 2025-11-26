import React from 'react'
import { Link, useParams } from 'react-router'
import { recipes } from './Recipes'

const RecipeDetails = () => {
    const {recipeId}=useParams()
    
    const {ingredients,instructions}=recipes.filter(recipe => recipe.id == recipeId)[0]

  return (
    <div className='bg-gray-100 h-screen p-8'>
        <div className='max-w-4xl mx-auto bg-white rounded-xl shadow-md p-6 '>
            <Link to={'/recipes'} className='text-rose-600 mb-6'>Go back</Link>
            <h1 className='text-3xl font-bold capitalize'>sample recipes</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 p-6'>
                <div>
                    <h3 className='text-xl font-semibold capitalize'>ingredients</h3>
                    {
                        ingredients.map(ingredient => (
                           <li>{ingredient}</li>
                        ))
                    }
                </div>
                <div>
                    <h3 className='text-xl font-semibold capitalize'>instructions</h3>
                    {
                        instructions.map(instruction => (
                            <li>{instruction}</li>
                        ))
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default RecipeDetails
