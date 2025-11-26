import React from 'react'
import { Link } from 'react-router'

const Home = () => {
  return (
    <div className='text-center mt-10'>
      <div className='mb-6 capitalize'>
          <h1 className='text-4xl font-bold '>Welcome to Recipe Book</h1>
          <p className='text-gray-600 mt-4'>discover delicious recipes and start cooking today!</p>
      </div>
      <div className='max-w-2xl mx-auto gap-6 grid md:grid-cols-2'>
        <Link
          to={'recipes'}
          className='bg-rose-600 p-6 rounded-md shadow-md text-white capitalize'
        >
           <h3 className='text-xl  font-bold mb-2'>Brows recipes</h3>
           <p className='text-sm'>explore our collection of delicious recipes</p>
        </Link>
        <Link
          to={'categories'}
           className='bg-rose-600 p-6 rounded-md shadow-md text-white capitalize'
        >
           <h3 className='text-xl  font-bold mb-2'>recipe categories</h3>
           <p className='text-sm'>find recipes by category</p>
        </Link>
      </div>
    </div>
  )
}

export default Home
