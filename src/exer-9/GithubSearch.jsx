import { useEffect, useState } from "react"

const GithubSearch=()=>{
    const [user, setUser]=useState(null)
    const [inputValue, setInputValue]=useState('')
    const [loading, setLoading]=useState(false)
    const [isClicked, setIsClicked]=useState(false)

    useEffect(()=>{
        try {

            if(!isClicked) return;
            const fetchUser=async ()=>{
                setLoading(true)
                const response=await fetch(`https://api.github.com/users/${inputValue}`)
                const data=await response.json()
                setUser(data)
                setLoading(false)
                console.log(data);
            }
            fetchUser()
        } catch (error) {
            console.error("error: ",error)
        }

    },[isClicked])

    if(loading) return <h1>Loading...</h1>

    return(
        <div>
            <h1>Github Search</h1>
            <input 
               type="text" 
               placeholder="enter github username"
               value={inputValue}
               onChange={e => setInputValue(e.target.value)}
            />
            <button onClick={()=>setIsClicked(true)}>Search</button>
            <div>
                {
                    isClicked && 
                      <div>
                          <h1>{user?.name}</h1>
                          <img style={{width:"200px", height:"200px", borderRadius:"50%"}} src={user?.avatar_url} alt="" />
                          <h2>public repos: {user?.public_repos}</h2>
                       </div>
                }

            </div>
        </div>
    )
}
export default GithubSearch