// packages
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
// styles
import './styles.css'

export default function Nav(props) {
    // state declaration: build JSX array of NavBar items
    const initialState = [
			<div className='nav-item' key='1'>
<<<<<<< HEAD
<<<<<<< HEAD
				<Link to='/month'>
                    <h1>Month</h1>
                </Link>
=======
				<h1>Month</h1>
>>>>>>> 969d9d2 (sign up and log in functionality)
=======
				<Link to='/month'>
                    <h1>Month</h1>
                </Link>
>>>>>>> dev
			</div>,

			<div className='nav-item' key='2'>
				<Link to='/'>
					<h1>Home</h1>
				</Link>
			</div>
		]

<<<<<<< HEAD
<<<<<<< HEAD
        
=======
>>>>>>> 969d9d2 (sign up and log in functionality)
=======
        
>>>>>>> dev
    const [navItems, setNavItems] = useState(initialState)

    // add NavBar items to JSX array depending on App login state
    useEffect(() => {
        if (props.isLoggedIn) {
            setNavItems(initialState.concat(
                <div className="nav-item" key='3'>
                    <button onClick={() => { props.setLogInStatus(false) }}>Log Out</button>
                </div>
            ))
        } else {
            setNavItems(initialState.concat([
                <div className="nav-item" key='3'>
                    <Link to= '/user/signup'>Sign Up</Link>
                    <Link to= '/user/login'>Log In</Link>
                </div>
            ]))
        }
    }, [props.isLoggedIn])

    // render JSX
    return (
        <nav>
            {navItems}
        </nav>
    )
}