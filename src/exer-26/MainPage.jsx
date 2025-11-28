import React, { useContext } from 'react'
import { NavLink, Outlet, useNavigate } from 'react-router'
import { AuthContext } from './AuthContext'

const MainPage = () => {
    const { isAuthenticated, logout}=useContext(AuthContext);
    const navigate=useNavigate();

    const handleLogout=()=>{
        logout();
        navigate('/login');
    }
  return (
    <div>
        <div>
            <header className='flex justify-between items-center px-10 py-5 bg-white shadow-lg'>
                <h1 className='text-2xl font-bold'>Simple Blog</h1>
                <nav className='flex gap-6 items-center font-medium '>
                    <NavLink 
                       className={({isActive})=> isActive? 'bg-sky-600 px-4 py-2 text-white rounded-md  transition-colors':undefined}
                       to={"/home"}>Home</NavLink>
                    {
                        isAuthenticated ? (

                            <>
                                <NavLink 
                                   className={({isActive})=> isActive? 'bg-sky-600 px-4 py-2 text-white rounded-md transition-colors':undefined}
                                   to={"/createPosts"}>Create Posts</NavLink>
                                <button 
                                   onClick={handleLogout}>Logout</button>
                            </>
                        ):(
                            <NavLink 
                             className={({isActive})=> isActive? 'bg-sky-600 px-4 py-2 text-white rounded-md transition-colors':undefined}
                              to={"/login"}>Login</NavLink>
                        )
                    }
                </nav>
            </header>
            <main>
                <Outlet/>
            </main>
        </div>
    </div>
  )
}

export default MainPage