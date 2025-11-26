import React from 'react'
import { Link, Outlet } from 'react-router';

// Categories
const categories = [
  {
    id: 'breakfast',
    name: 'Breakfast',
    description: 'Start your day right'
  },
  {
    id: 'lunch',
    name: 'Lunch',
    description: 'Midday favorites'
  },
  {
    id: 'dinner',
    name: 'Dinner',
    description: 'Evening meals'
  },
  {
    id: 'desserts',
    name: 'Desserts',
    description: 'Sweet treats'
  }
];
const Categories = () => {
  return (
    <div className='bg-gray-100 h-full'>
      <div className='max-w-4xl mx-auto pt-8'>
        <h1 className='text-4xl capitalize font-bold '>categories</h1>
        <div className='bg-white mt-6 shadow-md rounded-lg p-6 '>
          {
            categories.map(category => (
              <Link
               to={`/categories/${category.id}`}
               key={category.id}
               className='block hover:bg-rose-50 hover:text-rose-600 p-3 rounded-lg transition-colors duration-300'
              >
                <h3 className='font-bold '>{category.name}</h3>
                <p className='text-gray-600 '>{category.description}</p>
              </Link>
            ))
          }
        </div>
      </div>
      <Outlet/>
    </div>
  )
}

export default Categories
