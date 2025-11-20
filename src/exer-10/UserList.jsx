
const UserList=(props)=>{
    console.log(props.users[0]);
    return(
        <div>
            <h1>User List</h1>
            <ul>
                {
                    props.users.map((user)=>(
                        <li key={user.id}>name: {user.name} -   email:{user.email}</li>
                    ))
                }
            </ul>
        </div>
    )
}
export default UserList;