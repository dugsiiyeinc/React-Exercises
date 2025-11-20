
const UserList=({users})=>{
    return(
        <div>
            <h1>User List</h1>
            <ul>
                {
                    users.map((user)=>(
                        <li key={user.id}>name: {user.name} -   email:{user.email}</li>
                    ))
                }
            </ul>
        </div>
    )
}
export default UserList;