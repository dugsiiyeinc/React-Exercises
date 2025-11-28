
import { useContext } from 'react';
import { Link, Outlet } from 'react-router';
import { PostsContext } from './PostsContext';

const HomePage = () => {
    const {posts}=useContext(PostsContext)

    console.log(posts);
  return (
    <>
        <div className='max-w-lg m-auto'>
            <div className='mt-20'>
                <h1 className='text-center text-4xl font-bold mb-5'>Welcome to the Home Page</h1>
                <p className='text-sm text-gray-500 '>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ut numquam officia, cum ullam cupiditate nihil atque animi consectetur.
                    Veritatis, cumque?</p>
            </div>
        </div>
            <div className='flex flex-col gap-10 p-12'>
                <h1 className='text-3xl text-center font-bold'>Posts</h1>
                <div className='grid grid-cols-3 gap-4'>
                    {
                        posts.length>0 ? (
                            posts.map(post => (
                                <div
                                  className='h-full flex flex-col gap-4 px-6 py-4 bg-white shadow-md rounded-xl'
                                  key={post.id}>
                                    <h2 className='text-xl font-bold text-center'>{post.title}</h2>
                                    <p className='text-sm text-gray-600 grow'>
                                        {post.content.length > 150 ? post.content.substring(0, 150)+ "..." : post.content}
                                    </p>
                                    
                                    <div className=' mt-auto flex justify-end'>
                                        <Link to={`/home/${post.id}`} className='text-blue-600 hover:text-blue-800'>Read More</Link>
                                    </div>
                                </div>
                            ))
                        ):(
                            <p className='text-center'>No posts found</p>
                        )
                    }
                </div>
            </div>
            <main>
                <Outlet/>
            </main>
    </>
  )
}

export default HomePage