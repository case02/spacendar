import { useState, useEffect } from 'react';
import { signUp } from '../../utils/api';
<<<<<<< HEAD
import { useState } from 'react'
=======
import { useNavigate } from 'react-router-dom';
>>>>>>> 969d9d2 (sign up and log in functionality)

export default function SignUp(props) {
	const initialState = { username: '', password: '' };
	const [formState, setFormState] = useState(initialState);
	const navigate = useNavigate();

	const handleChange = (event) => {
		setFormState({ ...formState, [event.target.name]: event.target.value })};
		
		function handleSubmit(event) {
			event.preventDefault();
			signUp(formState).then((data) => {
				localStorage.token = data.token;
			navigate('/user/login')
			})};

		return (
			<div className="form">
			<h1>Sign Up</h1>
			<form onSubmit={handleSubmit}>
				<label htmlFor='username'>
					<p>Username</p>
					<input
						type='text'
						name='username'
						value={formState.username}
						onChange={handleChange}
						required
					/>
				</label>
				<label htmlFor='password'>
					<p>Password</p>
					<input
						type='password'
						name='password'
						value={formState.password}
						onChange={handleChange}
						required
					/>
				</label>
					<button type='submit'>Sign Up</button>
			</form>
			</div>
		);
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
	};
}
    const handleSubmit = (event) => {
        event.preventDefault();
        setFormState(initialState);
    }
	return (
		<form onSubmit={handleSubmit}>
			<label>
				<p>Username</p>
				<input 
                type='text' 
                name='username'
                value={formState.username}
                onChange={handleChange} />
			</label>
			<label>
				<p>Password</p>
				<input 
                type='password' 
                name='password' 
                value={formState.password}
                onChange={handleChange}/>
			</label>
			<div>
				<button typ='submit'>Sign Up</button>
			</div>
		</form>
	)}};
=======
	}
>>>>>>> 969d9d2 (sign up and log in functionality)
=======
	};

>>>>>>> 5cf58a0 (merge conflicts AGAIN)
=======
	}
>>>>>>> 969d9d2 (sign up and log in functionality)
