import { useState } from 'react';
import { signUp } from '../../utils/api';

export default function SignUp(props) {
	const initialState = { username: '', password: '' };
	const [formState, setFormState] = useState(initialState);

	const handleChange = (event) => {
		setFormState({ ...formState, [event.target.id]: event.target.value });

		function handleSubmit(event) {
			event.preventDefault();
			signUp(formData).then((data) => {
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
