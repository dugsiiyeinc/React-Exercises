import { Link, NavLink } from 'react-router'

const NavBars = () => {
  return (
    <div className='flex justify-around items-center bg-white shadow-lg h-16 py-4'>
      <Link
        className='text-2xl text-rose-500 font-bold '
        to={'.'}
      >Recipe Book</Link>
      <nav className='flex items-center gap-6 font-semibold text-gray-600'>
        <NavLink
          to={'.'}
          className={({isActive}) => isActive ? 'text-rose-500 font-semibold' : undefined}
        >Home</NavLink>
        <NavLink
         to={'recipes'}
         className={({isActive}) => isActive ? 'text-rose-500 font-semibold' : undefined}
        >Recipes</NavLink>
        <NavLink
          to={'categories'}
          className={({isActive}) => isActive ? 'text-rose-500 font-semibold' : undefined}
        >Categories</NavLink>
      </nav>
    </div>
  )
}

export default NavBars
