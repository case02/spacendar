import { useState } from 'react';
import { signUp } from '../../utils/api';
import { useState } from 'react'

export default function SignUp(props) {
	const initialState = { username: '', password: '' };
	const [formState, setFormState] = useState(initialState);

	const handleChange = (event) => {
		setFormState({ ...formState, [event.target.id]: event.target.value });

		function handleSubmit(event) {
			event.preventDefault();
			signUp(formState).then((data) => {
				localStorage.token = data.token;
				props.setLogInStatus(true)
			})
		};
		return (
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
				<div>
					<button typ='submit'>Sign Up</button>
				</div>
			</form>
		);
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
