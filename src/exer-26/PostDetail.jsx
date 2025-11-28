// import React, { useContext } from 'react'
// import { Link, useParams } from 'react-router';
// import { PostsContext } from './PostsContext';

// const PostDetail = () => {
//     const {posts}=useContext(PostsContext);
//     const {postId}=useParams();

//     const post=posts.find(post=>post.id===parseInt(postId));
//     console.log(post);
    
//   return (
//     <div className='m-5'>
//         <Link
//            className='bg-sky-600 hover:bg-sky-800 px-4 py-2 text-white rounded-md  transition-colors' 
//            to="/home">Back to Home</Link>
//         <div className='mx-20 mt-10 flex flex-col gap-4'>
//             <h2 className='text-center text-2xl font-bold'>{post.title}</h2>
//             <p>{post.content}</p>
//         </div>
//     </div>
//   )
// }

// export default PostDetail

import React, { useContext } from 'react';
import { Link, useParams, useNavigate } from 'react-router';
import { PostsContext } from './PostsContext';

const PostDetail = () => {
    const { posts, deletePost } = useContext(PostsContext);
    const { postId } = useParams();
    const navigate = useNavigate();

    const postIndex = posts.findIndex(post => post.id === parseInt(postId));
    const post = posts[postIndex];
    const prevPost = postIndex > 0 ? posts[postIndex - 1] : null;
    const nextPost = postIndex < posts.length - 1 ? posts[postIndex + 1] : null;

    const handleDelete = () => {
        deletePost(post.id);
        navigate('/home'); 
    };

    return (
        <div className='m-5'>
            <div className='flex justify-between items-center'>
                <Link
                    className='bg-sky-600 hover:bg-sky-800 px-4 py-2 text-white rounded-md transition-colors'
                    to="/home">Back to Home
                </Link>
                <div className='flex items-center gap-4'>
                    {prevPost && (
                        <Link
                            to={`/home/${prevPost.id}`}
                            className='bg-sky-600 hover:bg-sky-800  px-4 py-2 text-white rounded-md transition-colors'>
                            Previous Post
                        </Link>
                    )}
                    {nextPost && (
                        <Link
                            to={`/home/${nextPost.id}`}
                            className='bg-sky-600 hover:bg-sky-800  px-4 py-2 text-white rounded-md transition-colors'>
                            Next Post
                        </Link>
                    )}
                </div>
            </div>

            <div className='mx-20 mt-10 flex flex-col gap-4'>
                <h2 className='text-center text-2xl font-bold'>{post.title}</h2>
                <p>{post.content}</p>
            </div>
        </div>
    );
};

export default PostDetail;