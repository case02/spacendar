import axios from 'axios';

export async function signUp(formData) {
    const { data } = await axios.post('http://localhost:3001/user/signup', formData)
    return data
}

// create a comment
export async function createComment(formData) {
    const config = {
        headers: {
            'Authorization': localStorage.getItem('token')
        }
    }
    const { data } = await axios.post('http://localhost:3001/comment', formData, config)

    
//Log in to User Account
    const { data } = await axios.post('http://127.0.0.1/user/login', formData)
    return data
}