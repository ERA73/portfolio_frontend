import axios from 'axios'

const contactApi = axios.create({
    // baseURL: 'http://127.0.0.1:8000/contact/api/v1/contact/'
    baseURL: import.meta.env.REACT_APP_API_PORTFOLIO,
    // buttom sections
    headers: {
        // 'Accept': 'application/json',
        'Content-Type': 'application/json;charset=UTF-8'
      },
    // redirect: 'follow'
    // top section
    
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