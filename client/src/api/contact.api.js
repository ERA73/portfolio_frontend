import axios from 'axios'

const contactApi = axios.create({
    baseURL: import.meta.env.VITE_API_PORTFOLIO,
    headers: {
        // 'Accept': 'application/json',
        'Content-Type': 'application/json;charset=UTF-8'
      },
    
})

export const getAllContacts = () =>  contactApi.get('/');

export const sendContact = (contact) => contactApi.post('/contact/api/v1/contact/', contact)
    .then(response => {
        console.log(response)
        return {data:response.data, status:true, code:response.status}
    })
    .catch(error => {
        return {data:error.response.data, status:false, code:error.response.status}
    });