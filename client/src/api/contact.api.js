import axios from 'axios'

const contactApi = axios.create({
    baseURL: 'http://localhost/contact/api/v1/contact/'
})

// export const getAllContacts = () => {
//     return contactApi.get('/')
// }
// export const sendContact = (contact) => {
//     return contactApi.post('/', contact)
// }

export const getAllContacts = () =>  contactApi.get('/');

export const sendContact = (contact) => contactApi.post('/', contact)
    .then((response) => {
        return {data:response, status:true, code:response.status}
    })
    .catch((error) => {
        return {data:error, status:false, code:error.response.status}
    });