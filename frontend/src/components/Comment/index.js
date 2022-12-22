// packages
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// utils
import { createComment } from '../../utils/api';

export default function Comment(props) {
	const [formData, setFormData] = useState({ title: '', text: '' });

	function handleChange(e) {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	}

	function handleSubmit(e) {
		e.preventDefault();
		createComment(formData).then((data) => console.log(data));
	}

	const navigate = useNavigate();

	// redirect to home page if not logged in
	useEffect(() => {
		if (!props.isLoggedIn) {
			navigate('/');
		}
	}, [props.isLoggedIn]);

	// render JSX
	return (
		<form>
			<h1>Create a Post</h1>
			<label htmlFor='title'>Title:</label>
			<input
				type='text'
				name='title'
				value={formData.title}
				onChange={handleChange}
			/>

			<label htmlFor='text'>Post Text:</label>
			<input
				type='text'
				name='text'
				value={formData.text}
				onChange={handleChange}
			/>

			<button onClick={handleSubmit}>Comment</button>
		</form>
	);
}
