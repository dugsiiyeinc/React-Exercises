import { createBrowserRouter } from "react-router";
import HomePage from "./HomePage";
import CreatePosts from "./CreatePosts";
import Login from "./Login";
import MainPage from "./MainPage";
import ProtectedRoute from "./ProtectedRoute";
import PostDetail from "./PostDetail";

const router=createBrowserRouter([
    {
        path:"/",
        element: <MainPage/>,
        children:[
            {
                path:"/createPosts",
                element:(
                    <ProtectedRoute element={<CreatePosts/>}/>
                )
            },
            {
                path:"/createPosts:postId",
                element:(
                    <ProtectedRoute element={<CreatePosts/>}/>
                )
            },
            {
                path:"/home",
                element: <HomePage/>
            },
            {
                path:"/home/:postId",
                element:<PostDetail/>
            },
            {
                path:"/login",
                element: <Login/>
            }
        ]
    }
]);

export default router;