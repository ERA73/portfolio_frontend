import { useRef, useState } from "react"
import { useForm } from 'react-hook-form'
import { sendContact } from '../api/contact.api'
import { useNavigate } from 'react-router-dom'
import '../styles/contact.css'

export function ContactPage() {
    const { register, handleSubmit, reset, formState: { errors } } = useForm()
    const [status, setStatus] = useState('');

    const navigate = useNavigate()

    const onSubmit = handleSubmit(async data => {
        const res = await sendContact(data)
        console.log(data)
        if (res.status) {
            // navigate('/contactlist')
            reset({
                name: "",
                email: "",
                message: ""
            });
            setStatus({ type: 'success', data: "Sent Successfully" });
        } else {
            setStatus({ type: 'error', data: res.data.message });
        }
    })
    return (
        <div className='contact-container'>
            <h2>Do you need more information?</h2>
            <p>Let me know and I will answer you as soon as possible</p>
            <form className='contact-form' onSubmit={onSubmit}>
                <input className={errors.name && "error"} type="text" placeholder="Name" {...register("name", { required: true })} />
                {/* {errors.name && <span className='error'>Name is required</span>} */}

                <input className={errors.email && "error"} type="email" placeholder="email@example.com" {...register("email", {
                    required: "Email is required",
                    validate: {
                        maxLength: (v) => v.length <= 50
                            || "The email should have at most 50 characters",
                        matchPattern: (v) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v)
                            || "Email address must be a valid address",
                    }
                })} />
                {/* {errors.email && <span className='error'>{errors.email.message}</span>} */}

                <textarea className={errors.message && "error"} rows="5" placeholder="Message" {...register("message", { required: true })}></textarea>
                {/* {errors.message && <span className='error'>Message is required</span>} */}
                <button>Send</button>
            </form>
            {status?.type === 'success' && <span className='success'>{status.data}</span>}
            {status?.type === 'error' && <span className='error'>{status.data}</span>}
        </div>
    )
}