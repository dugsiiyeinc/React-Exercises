import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

const FormWithUseForm = () => {
    const subjects=["math","biology","physics","chemistry"]
    const {register, handleSubmit, formState:{errors}}= useForm();
    

    const onSubmit=(data)=>{
        console.log(data);
    }
  return (
    <div className='bg-blue-50 h-[100%]'>
        <div className='max-w-lg m-auto p-10'>
            <form onSubmit={handleSubmit(onSubmit)} className='bg-white p-10 flex flex-col gap-4 rounded-xl shadow-2xl'>
                <h2 className='text-2xl text-gray-800'>student form Application</h2>
                <div className='flex flex-col gap-2'>
                    <label htmlFor="name">Full name</label>
                    <input
                        className="bg-gray-100 outline-none px-2 py-1 rounded"
                        type="text"
                        name='name'
                        id='name'
                        placeholder='full name'
                        {...register('name', 
                            { required: "fullname is required",
                                minLength: { value: 5, message: "Name must be at least 5 characters long" },
                             })}
                    />
                     {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
                </div>
                <div className='flex flex-col gap-2'>
                    <label htmlFor="email">Email</label>
                    <input
                        className="bg-gray-100 outline-none px-2 py-1 rounded"
                        type="text"
                        name='email'
                        id='email'
                        placeholder='email'
                        {...register('email', 
                            { required: "email is required", 
                                pattern:{
                                    value:/^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                    message:"enter a valid email address"
                                }
                            })}
                    />
                         {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                </div>
                <label htmlFor="role">Role</label>
                <select {...register("role", { required: "Role is required" })} className='mt[-10px] bg-gray-100 outline-none px-2 py-1 rounded' name="role" id="role">
                    <option value="">Select a role</option>
                    <option value="frontend">Frontend developer</option>
                    <option value="backend">Backend developer</option>
                    <option value="fullstack">Fullstack developer</option>

                </select>
                 {errors.role && <p className="text-red-500 text-sm">{errors.role.message}</p>}
                <div>
                    <label>Skills</label><br />
                    <div className='flex justify-between mt-2'>
                        <div>
                            {
                                subjects.map((subject)=>(
                                    <div key={subject} className='flex gap-2'>
                                        <input
                                            type="checkbox"
                                            value={subject}
                                            {...register("subjects",
                                                {required:"select at least one subject"})}
                                        />
                                        <label>{subject}</label><br />
                                    </div>
                                ))
                            }
                            {errors.subjects && <p className="text-red-500 text-sm">{errors.subjects.message}</p>}
                            </div>
                    </div>
                </div>
                <button type='submit' className='mt-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700'>Submit</button>
            </form>
        </div>
    </div>
  )
}
    

export default FormWithUseForm