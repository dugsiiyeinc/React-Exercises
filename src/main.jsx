import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import router from './exer-26/Routes'
import { AuthProvider } from './exer-26/AuthContext'
import { PostsProvider } from './exer-26/PostsContext'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <PostsProvider>
        <RouterProvider router={router}/>
      </PostsProvider>
    </AuthProvider>
  </StrictMode>,
)
