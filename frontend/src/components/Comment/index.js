// packages
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// utils
import { createComment } from '../../utils/api';

export default function Comment(props) {
	const [formData, setFormData] = useState({ comment: '' });
	const [showForm, setShowForm] = useState(false);


	function handleChange(e) {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	}

	function handleSubmit(e) {
		e.preventDefault();
		createComment(formData).then((data) => console.log('this is our comment', data));
	}

	// const navigate = useNavigate();

	// redirect to home page if not logged in
	// useEffect(() => {
	// 	if (!props.isLoggedIn) {
	// 		navigate('/');
	// 	}
	// }, [props.isLoggedIn]);

	// render JSX
	return (
		<div className='comment-container'>	
			<div className='comment-form'>
				<button
					className='btn btn-primary'
					onClick={() => {
						setShowForm(!showForm);
					}}>
					Leave a comment
				</button>
				{showForm ? (
					<form>
						<input
							id='comment'
							className='form-control'
							type='text'
							placeholder='...'
							onChange={handleChange}
						/>

						<button className='btn btn-primary' onClick={handleSubmit}>
							Comment
						</button>
					</form>
				) : null}
			</div>
			<div className='display-comments'>

			</div>
		</div>
	);
}
