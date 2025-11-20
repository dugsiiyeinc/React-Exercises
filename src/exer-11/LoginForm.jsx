import { useState } from "react";

const LoginForm = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    const handleLogin=()=>{
        if(username && password){
            setIsLoggedIn(true)
        }
    }
    const handleLogout=()=>{
        setIsLoggedIn(false)
        setUsername("")
        setPassword("")
    }
    return (

        <div>
            {
                !isLoggedIn ? (

                    <div>
                        <h1>Login</h1>
                        <div>
                            <label>username:</label>
                            <input
                                type="text"
                                value={username}
                                onChange={e => setUsername(e.target.value)}
                                required
                            />
                        </div>
                        <div>
                            <label >password:</label>
                            <input
                                type="password"
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        <button onClick={handleLogin}>Login</button>
                    </div>
                ) : (
                    <div>
                        <h1>welcome, {username}</h1>
                        <button onClick={handleLogout}>Logout</button>
                    </div>
                )
            }
        </div>

    )
}
export default LoginForm;