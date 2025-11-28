import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { PostsContext } from './PostsContext';

const CreatePosts = () => {
    const {register, handleSubmit, reset}= useForm();
    const {posts, setPosts}=useContext(PostsContext);

    const onSubmit=(data)=>{
        setPosts([...posts, {...data, id: Date.now()}]);
        console.log(data);
        reset();
    }
  return (
    <div className='max-w-[300px] m-auto mt-15'>
        <div className='flex flex-col gap-8 bg-white shadow-xl rounded-xl p-6'>
            <h2 className='text-3xl text-center font-bold'>Create New Post</h2>
            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-2'>
                <div>
                    <label htmlFor="title">Title</label>
                    <input
                        className='w-full outline-none px-2 py-1 bg-gray-200 rounded-md mt-2'
                        type="text"
                        name="title"
                        id="title"
                        placeholder="Title"
                        {...register('title', { required: 'Title is required' })} />
                </div>
                    
                <div>
                    <label htmlFor="content">Content</label>
                    <textarea
                      name="content"
                      id="content"
                      className='w-full h-[150px] outline-none px-2 py-1 bg-gray-200 rounded-md mt-2'
                      placeholder="Content goes here..."
                      {...register('content', { required: 'Content is required' })} 
                    />
                </div>
                <button 
                  className='w-full bg-blue-500 text-white py-2 rounded-md mt-4 hover:bg-blue-600 transition-colors'
                  type="submit">Submit</button>
            </form>
        </div>
    </div>
  )
}

export default CreatePosts