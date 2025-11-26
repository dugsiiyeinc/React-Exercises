import { useState } from "react"
import { UserCard } from "./exer 1/UserCard"
import UserList from "./exer-10/UserList"
import Blog from "./exer-2/Blog"
import { DynamicUserCard } from "./exer-3/DynamicUserCard"
import ToggleButton from "./exer-4/ToggleButton"
import ShoppingCart from "./exer-5/ShoppingCart"
import ChangingTheTitle from "./exer-6/ChangingTheTitle"
import MouseTracking from "./exer-7/MouseTracking"
import Countdown from "./exer-8/Countdown"
import GithubSearch from "./exer-9/GithubSearch"
import LoginForm from "./exer-11/LoginForm"
import Counter from "./exer-12/Counter"
import DoubleCounter from "./exer-13/DoubleCounter"
import MultiStepForm from "./exer-14/MultiStepForm"
// import Main from "./exer-15/Main"
import Main from "./exer-16/Main"
import ContactForm from "./exer-17/ContactForm"
import {ContactApp} from "./exer-18/ContactApp"
// import TodoApp from "./exer-19/TodoApp"
import TodoApp from "./exer-20/TodoApp"
import StudentDashboard from "./exer-21/StudentDashboard"
import MultipleInputs from "./exer-22/MultipleInputs"
import MultipleFormData from "./exer-23/MultipleFormData"
import FormWithUseForm from "./exer-24/FormWithUseForm"
import { Outlet } from "react-router"
import NavBars from "./exer-25/components/NavBars"

function App(){
  const users=[
    {
      id:1,
      name:"jamal",
      email:"jamal@gmail.com"
    },
    {
      id:2,
      name:"nor",
      email:"nor@gmail.com"
    },
    {
      id:3,
      name:"ahmed",
      email:"ahmed@gmail.com"
    },
    {
      id:4,
      name:"abdi",
      email:"abdi@gmail.com"
    },
    
  ]
  return (
    <>
      {/* exercise 1 */}
      {/* <UserCard/> */}

       {/* exercise 2 */}
      {/* <Blog/> */}

      {/* exercise 3 */}
      {/* <DynamicUserCard
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
      /> */}

      {/* exercise 4 */}
      {/* <ToggleButton/> */}

      {/* exercise 5 */}
      {/* <ShoppingCart/> */}

      {/* exercise 6 */}
      {/* <ChangingTheTitle/> */}

      {/* exercise 7 */}
      {/* <MouseTracking/> */}

      {/* exercise 8 */}
      {/* <Countdown/> */}

      {/* exercise 9 */}
      {/* <GithubSearch/> */}

      {/* exercise 10 */}
      {/* <UserList users={users}/> */}

      {/* exercise 11 */}
      {/* <LoginForm/> */}

      {/* exercise 12 */}
      {/* <Counter/> */}

      {/* exercise 13 */}
      {/* <DoubleCounter/> */}

      {/* exercise 14 */}
      {/* <MultiStepForm/> */}

      {/* exercise 15 */}
      {/* <Main/> */}

      {/* exercise 16 */}
      {/* <Main/> */}

      {/* exercise 17 */}
      {/* <ContactForm/> */}

      {/* exercise 18 */}
      {/* <ContactApp/> */}

      {/* exercise 19 */}
      {/* <TodoApp/> */}

      {/* exercise 20 */}
      {/* <TodoApp/> */}

      {/* exercise 21 */}
      {/* <StudentDashboard/> */}

      {/* exercise 22 */}
      {/* <MultipleInputs/> */}

      {/* exercise 23 */}
      {/* <MultipleFormData/> */}

      {/* exercise 24 */}
      {/* <FormWithUseForm/> */}

      {/* exercise 25 */}
      <NavBars/>
      <Outlet/>
    </>
  )
}

export default App