import {useForm} from 'react-hook-form'
import { sendContact } from '../api/contact.api'
import { useNavigate } from 'react-router-dom'
import '../styles/contact.css'

export function ContactPage() {
    const {register, handleSubmit, formState:{errors}} = useForm()

    const navigate = useNavigate()

    const onSubmit = handleSubmit(async data => {
        const res = await sendContact(data)
        if (res.status){
            navigate('/contactlist')
        }else{
            console.log(res)
        }
    })
    return <div className='contact-container'>
        <form onSubmit={onSubmit}>
            <input type="text" placeholder="Name" {...register("name", {required:true})}/>
            {errors.name && <span className='error'>Name is required</span>}

            <input type="email" placeholder="email@example.com" {...register("email", {
                required:"Email is required", 
                validate: {
                    maxLength: (v) => v.length <= 50 
                        || "The email should have at most 50 characters",
                    matchPattern: (v) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v)
                        || "Email address must be a valid address",
                }
            })}/>
            {errors.email && <span className='error'>{errors.email.message}</span>}

            <textarea rows="5" placeholder="Message" {...register("message", {required:true})}></textarea>
            {errors.message && <span className='error'>Message is required</span>}
            <button>Send</button>
        </form>
    </div>
    }