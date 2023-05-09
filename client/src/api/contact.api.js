import axios from 'axios'

export const getAllContacts = () => {
    return axios.get('http://localhost/contact/api/v1/contact/')
}