import { useState } from 'react';


export default function SignUp() {
    const initialState = { username: '', password: '' };
	const [formState, setFormState] = useState(initialState);

    const handleChange = (event) => {
        setFormState({ ...formState, [event.target.id]: event.target.value });

    const handleSubmit = (event) => {
        event.preventDefault();m
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
