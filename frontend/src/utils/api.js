import axios from 'axios';
import { useState } from 'react';


//get info from api function 
export function GetImages() {
	/* Build a URL from the searchOptions object */
	// const key = process.env.REACT_APP_APOD_KEY;
	const [monthImages, setMonthImages] = useState([]);
	const url =
		'https://api.nasa.gov/planetary/apod?api_key=9lSTCZNq5GoBuU3lchGbDwvD6dGM7q1hwhF4tP5V&start_date=2022-12-01&end_date=2022-12-23';
	fetch(url)
		.then((response) => response.json())
		.then((response) => {
			setMonthImages(response);
		})
		.catch(console.error);
}
// sign up function
export async function signUp(formData) {
	const { data } = await axios.post(
		'http://localhost:8000/user/signup',
		formData
	);
	return data;
}

// create a comment
export async function createComment(formData) {
	const config = {
		headers: {
			Authorization: localStorage.getItem('token'),
		},
	};
	const { data } = await axios.post(
		'http://localhost:8000/comment',
		formData,
		config
	);
	return data;
}

//Log in to User Account
export async function loginToAccount(formData) {
	const { data } = await axios.post(
		'http://localhost:8000/user/login',
		formData
	);
	return data;
}

// update user account
export async function updateUser(userId, formData) {
    const config = {
        headers: {
            'Authorization': localStorage.getItem('token')
        }
    }
    const { data } = await axios.put(`http://localhost:8000/user/${userId}`, formData, config)
    return data
}

// delet user account
export async function deleteUser(userId) {
    const config = {
        headers: {
            'Authorization': localStorage.getItem('token')
        }
    }
    await axios.delete(`http://localhost:8000/user/${userId}`, config) 
}
