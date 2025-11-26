import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "./pages/Home";
import Recipes from "./pages/Recipes";
import Categories from "./pages/Categories";
import RecipeDetails from "./pages/RecipeDetails";
import CategoryDetails from "./pages/CategoryDetails";

const router=createBrowserRouter([
    {
        path:'/',
        element:<App/>,
        children:[
            {
                index:true,
                element: <Home/>
            },
            {
                path:'recipes',
                element: <Recipes/>
            },
            {
                path:'/recipes/:recipeId',
                element: <RecipeDetails/>
            },
            {
                path:'categories',
                element: <Categories/>,
                children:[
                    {
                        path:'/categories/:categoryDetail',
                        element: <CategoryDetails/>
                    }
                ]
            }
        ]
    }
])
export default router