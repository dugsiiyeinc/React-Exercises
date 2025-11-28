import { createContext, useState } from "react";

export const PostsContext=createContext();

export const PostsProvider=({children})=>{
    const [posts, setPosts]=useState([]);
    const deletePost = (postId) => {
        setPosts(posts.filter(post => post.id !== postId));
    };
    

    return (
        <PostsContext.Provider value={{posts, setPosts, deletePost}}>
            {children}
        </PostsContext.Provider>
    )
}