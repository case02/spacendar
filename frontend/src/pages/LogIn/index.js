import { useState } from 'react'
import { loginToAccount } from '../../utils/api';

export default function LogIn(props) {
    const [formState, setFormState] = useState({
        username: '',
        password: ''
    })

    const handleChange = (event) => {
        setFormState({...formState, [event.target.name]: event.target.value })
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        loginToAccount(formState)
            .then((data) => {
                localStorage.token = data.token
                props.setLogInStatus(true)
            })
        
    }

    return (
        <div className="form">
            <h1>Log In</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username: </label>
                <input
                    id="username"
                    type="text"
                    onChange={handleChange}
                    value={formState.username}
                />
                <label htmlFor="password">Password: </label>
                <input
                    id="password"
                    type="password"
                    onChange={handleChange}
                    value={formState.password}
                />
                <button type="submit">Login</button>
            </form>
        </div>
    )
}