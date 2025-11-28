import React, { useContext } from 'react'
import { Navigate, useNavigate } from 'react-router';
import { AuthContext } from './AuthContext';

const Login = () => {

    const {isAuthenticated, login}=useContext(AuthContext);
    const navigate=useNavigate();

    if(isAuthenticated){
        return <Navigate to={"/home"} replace/>
    }
    const handleLogin=()=>{
        login();
        navigate("/home")
    }
  return (
    <div className='flex flex-col justify-center items-center mt-20'>
        <h1 className='text-3xl font-bold '>Login page</h1>
        <button 
          className='mt-6 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md'
          onClick={handleLogin}>Login</button>
    </div>
  )
}

export default Login