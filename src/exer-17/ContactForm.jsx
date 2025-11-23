import useForm from "./useForm";

const ContactForm = () => {
    const {values,handleChange}=useForm({
        name:'',
        email:'',
        message:'',
        phone:''
    })

    const handleSubmit=()=>{
        console.log("working...");
        console.log(values);
    }
  return (
    <div>
        <label htmlFor="name">name:</label>
        <input 
           type="text"
           name="name" 
           value={values.name}
           onChange={handleChange}
        /> <br />
        <label htmlFor="name">phone:</label>
        <input 
           type="text"
           name="phone" 
           value={values.phone}
           onChange={handleChange}
        /> <br />
        <label htmlFor="email">email:</label>
        <input 
            type="text"
            name="email" 
            value={values.email}
            onChange={handleChange}
        /> <br />
        <label htmlFor="message">message:</label>
        <input 
            type="text"
            name="message" 
            value={values.message}
            onChange={handleChange}
        /> <br /> <br />
        <button onClick={handleSubmit}>submit</button>     
    </div>
  )
}

export default ContactForm
