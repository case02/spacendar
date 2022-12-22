import axios from 'axios';

// sign up function
export async function signUp(formData) {
    const { data } = await axios.post('http://localhost:8000/user/signup', formData)
    return data
}

// create a comment
export async function createComment(formData) {
    const config = {
        headers: {
            'Authorization': localStorage.getItem('token')
        }
    }
    const { data } = await axios.post('http://localhost:8000/comment', formData, config)
    return data
}

    
//Log in to User Account
export async function loginToAccount(formData) {
    const { data } = await axios.post(
			'http://localhost:8000/user/login',
			formData
		);
    return data
}