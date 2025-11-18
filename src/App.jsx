import { UserCard } from "./exer 1/UserCard"
import Blog from "./exer-2/Blog"
import { DynamicUserCard } from "./exer-3/DynamicUserCard"

function App(){
  return (
    <>
      {/* exercise 1 */}
      {/* <UserCard/> */}

       {/* exercise 2 */}
      {/* <Blog/> */}

      {/* exercise 3 */}
      <DynamicUserCard
          name={"jamal abdiwahab"}
          email={"jamal@gmail.com"} 
      />
      <DynamicUserCard
          name={"ahmed nur"}
          email={"ahmed@gmail.com"} 
      />
      <DynamicUserCard
          name={"ali ahmed"}
          email={"ali@gmail.com"} 
      />
      <DynamicUserCard
          name={"jamac mohamed"}
          email={"jamac@gmail.com"} 
      />
    </>
  )
}

export default App