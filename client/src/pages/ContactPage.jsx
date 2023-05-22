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
        // console.log(res)
        if (res.status) {
            // navigate('/contactlist')
            reset({
                name: "",
                email: "",
                message: ""
            });
            setStatus({ type: 'success', data: res.data.message });
        } else {
            setStatus({ type: 'error', data: res.data.message });
        }
    })
    return (
        <div className='contact-container'>
            <h2>
                <span className="heading-main">Do you need more information?</span>
                <span className="heading-sec">Let me know and I will answer you as soon as possible</span>
            </h2>
            <div className="contact-content">
                <form className='contact-form' onSubmit={onSubmit}>
                    <div className="contact-field">
                        <label>Name</label>
                        <input className={errors.name && "error"} type="text" placeholder="Enter Your Name" {...register("name", { required: true })} />
                        {/* {errors.name && <span className='error'>Name is required</span>} */}
                    </div>
                    <div className="contact-field">
                        <label>Email</label>
                        <input className={errors.email && "error"} type="email" placeholder="e.g. email@example.com" {...register("email", {
                            required: "Email is required",
                            validate: {
                                maxLength: (v) => v.length <= 50
                                    || "The email should have at most 50 characters",
                                matchPattern: (v) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v)
                                    || "Email address must be a valid address",
                            }
                        })} />
                        {/* {errors.email && <span className='error'>{errors.email.message}</span>} */}
                    </div>
                    <div className="contact-field-msg">
                        <label>Message</label>
                        <textarea className={errors.message && "error"} rows="5" placeholder="Enter Your Message" {...register("message", { required: true })}></textarea>
                        {/* {errors.message && <span className='error'>Message is required</span>} */}
                    </div>
                    <button>Send</button>
                </form>
            </div>
            {status?.type === 'success' && <span className='success'>{status.data}</span>}
            {status?.type === 'error' && <span className='error'>{status.data}</span>}
        </div>
    )
}