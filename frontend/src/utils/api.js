import axios from 'axios';

// user signup
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
    return data
}