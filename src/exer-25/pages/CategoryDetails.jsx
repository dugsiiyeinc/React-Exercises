import React from 'react'
import { Link, useParams } from 'react-router'
import { recipes } from './Recipes';

const CategoryDetails = () => {
    const {categoryDetail}=useParams()

    const categoryInfo=recipes.filter(recipe => recipe.category === categoryDetail)[0]
    console.log(categoryInfo);
  return (
       <div className='max-w-4xl mx-auto pt-8 bg-white mt-6 shadow-md rounded-lg p-6 '>
        <h1 className='text-4xl capitalize font-bold '>{categoryInfo.category} Recipes</h1>
        <div className='border-2 rounded-lg mt-8'>
          <Link
               to={`/categories/${categoryInfo.id}`}
               className='block p-3'
            >
            <h3 className='font-bold '>{categoryInfo.title}</h3>
            <p className='text-gray-600 '>{categoryInfo.description}</p>
          </Link>
        </div>
      </div>
  )
}

export default CategoryDetails
