import { useState } from 'react'
import { loginToAccount } from '../../utils/api';
import { useNavigate } from 'react-router-dom';

export default function LogIn(props) {
    const navigate = useNavigate();
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
                localStorage.token = data.token;
                props.setLogInStatus(true)
            })
        navigate('/')
    }

    return (
        <div className="form">
            <h1>Log In</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username: </label>
                <input
                    type="text"
                    name="username"
                    onChange={handleChange}
                    defaultValue={formState.username}
                />
                <label htmlFor="password">Password: </label>
                <input
                    type="password"
                    name="password"
                    onChange={handleChange}
                    defaultValue={formState.password}
                />
                <button type="submit">Login</button>
            </form>
        </div>
    )
}