import axios from 'axios'

const contactApi = axios.create({
    baseURL: 'http://localhost:8000/contact/api/v1/contact/'
})

// export const getAllContacts = () => {
//     return contactApi.get('/')
// }
// export const sendContact = (contact) => {
//     return contactApi.post('/', contact)
// }

export const getAllContacts = () =>  contactApi.get('/');

export const sendContact = (contact) => contactApi.post('/', contact)
    .then(response => {
        console.log(response)
        return {data:response.data, status:true, code:response.status}
    })
    .catch(error => {
        return {data:error.response.data, status:false, code:error.response.status}
    });