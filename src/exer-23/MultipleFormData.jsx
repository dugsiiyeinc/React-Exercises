import React, { useState } from 'react'

const MultipleFormData = () => {
    const frontEndSkills=["React", "TypeScript", "Python", "UI Design"];
    const backEndSkills=["Node.js", "Django", "Flask", "Ruby on Rails"];
    const [errors, setErrors]=useState({});
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        role: '',
        skills: [],
        experience:0,
        agreement:false,
        opportunity:false
    });

    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(formData);
    }
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
    
        setFormData((prevData) => {
            if (type === 'checkbox') {
                if (name === "agreement" || name === "opportunity") {
                    return { ...prevData, [name]: checked };
                } else if (name === "skills") {
                    const skillValue = value;
                    const updatedSkills = checked
                        ? [...(prevData.skills || []), skillValue] // Ensure prevData.skills is an array
                        : (prevData.skills || []).filter(skill => skill !== skillValue);
                    
                    return { ...prevData, skills: updatedSkills };
                }
            } else {
                return { ...prevData, [name]: value };
            }
        });
    
        // Validation Logic
        let newErrors = { ...errors };
    
        if (name === "name") {
            if (value.length < 3 || /\d/.test(value)) {
                newErrors.name = "Name should be at least 3 characters long and contain no numbers.";
            } else {
                delete newErrors.name;
            }
        }
         if (name === "email") {
            if (!/^\S+@\S+\.\S+$/i.test(value)) {
                newErrors.email = "Please enter a valid email address.";
            } else {
                delete newErrors.email;
            }
        }
         if (name === "role") {
            if (!value) {
                newErrors.role = "Please select a role.";
            } else {
                delete newErrors.role;
            }
        }
         if (name === "experience") {
            if (value < 1 || value > 5) {
                newErrors.experience = "Experience should be between 1 and 5.";
            } else {
                delete newErrors.experience;
            }
        }
        if (name === "skills") {
            if (!checked && formData.skills.length === 1) {
                newErrors.skills = "Please select at least one skill.";
            } else {
                delete newErrors.skills;
            }
        }

        if (name === "agreement") {
            if (!checked) {
                newErrors.agreement = "You must agree to the terms and conditions.";
            } else {
                delete newErrors.agreement;
            }
        }
    
        setErrors(newErrors);
    };
    
  return (
    <div className='bg-blue-50 h-[100%]'>
        <div className='max-w-lg m-auto p-10'>
            <form onSubmit={handleSubmit} className='bg-white p-10 flex flex-col gap-4 rounded-xl shadow-2xl'>
                <h2 className='text-2xl text-gray-800'>Developer Form Application</h2>
                <div className='flex flex-col gap-2'>
                    <label htmlFor="name">Full name</label>
                    <input
                        className={`outline-none px-2 py-1 rounded ${errors.name ? 'border-2 border-red-500' : 'border-2 border-green-500'}`}
                        type="text"
                        name='name'
                        id='name'
                        value={formData.name}
                        onChange={handleChange}
                        placeholder='full name'
                    />
                     {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                </div>
                <div className='flex flex-col gap-2'>
                    <label htmlFor="email">Email</label>
                    <input
                        className={`outline-none px-2 py-1 rounded ${errors.email ? 'border-2 border-red-500' : 'border-2 border-green-500'}`}
                        type="text"
                        name='email'
                        id='email'
                        value={formData.email}
                        onChange={handleChange}
                        placeholder='email'/>
                         {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                </div>
                <label htmlFor="role">Role</label>
                <select value={formData.role} onChange={handleChange}  className={`outline-none px-2 py-1 rounded ${errors.role ? 'border-2 border-red-500' : 'border-2 border-green-500'}`} name="role" id="role">
                    <option value="">Select a role</option>
                    <option value="frontend">Frontend developer</option>
                    <option value="backend">Backend developer</option>
                    <option value="fullstack">Fullstack developer</option>

                </select>
                 {errors.role && <p className="text-red-500 text-sm">{errors.role}</p>}
                <div className='flex flex-col gap-2'>
                    <label htmlFor="experience">Experience</label>
                    <input
                        className={`outline-none px-2 py-1 rounded ${errors.experience? 'border-2 border-red-500' : 'border-2 border-green-500'}`}
                        type="number"
                        name='experience'
                        id='experience'
                        value={formData.experience}
                        onChange={handleChange}
                        placeholder='your experience'/>
                         {errors.experience && <p className="text-red-500 text-sm">{errors.experience}</p>}
                </div>
                <div>
                    <label htmlFor="skills">Skills</label><br />
                    <div className='flex justify-between mt-2'>
                        <div>
                            {
                                frontEndSkills.map((skill)=>(
                                    <div key={skill} className='flex gap-2'>
                                        <input
                                            type="checkbox"
                                            name='skills'
                                            value={skill}
                                            checked={formData.skills.includes(skill)}
                                            onChange={handleChange}
                                        />
                                        <label>{skill}</label><br />
                                    </div>
                                ))
                            }
                            </div>
                            <div>
                                {
                                    backEndSkills.map((skill)=>(
                                    <div key={skill} className='flex gap-2'>
                                        <input
                                            type="checkbox"
                                            name='skills'
                                            value={skill}
                                            checked={formData.skills.includes(skill)}
                                            onChange={handleChange}
                                        />
                                        <label>{skill}</label><br />
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
                 {errors.skills && <p className="text-red-500 text-sm">{errors.skills}</p>}
                <div className='flex gap-2 text-sm'>
                    <input
                        type="checkbox"
                        name='agreement'
                        id='agreement'
                        checked={formData.agreement}
                        onChange={handleChange}
                    />
                    <label htmlFor="agreement">I agree to the terms and conditions</label><br />
                </div>
                      {errors.agreement && <p className="text-red-500 text-sm">{errors.agreement}</p>}
                <div className='flex gap-2 text-sm'>
                    <input
                        type="checkbox"
                        name='opportunity'
                        id='opportunity'
                        checked={formData.opportunity}
                        onChange={handleChange}
                    />
                    <label htmlFor="opportunity">Recieve Notifications about new opportunities</label><br />
                </div>
                <button type='submit' className='mt-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700'>Submit</button>
            </form>
        </div>
    </div>
  )
}
    

export default MultipleFormData