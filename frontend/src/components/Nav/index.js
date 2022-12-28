// packages
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
// import Button from 'react-bootstrap/Button';
// import 'bootstrap/dist/css/bootstrap.min.css';
import spacendar from '../../assets/images/spacendar.png';
import Dropdown from 'react-bootstrap/Dropdown';

// styles
import './styles.css';

export default function Nav(props) {
	// state declaration: build JSX array of NavBar items
	const initialState = [
		<div className='nav-item' key='1'>
			<Link to='/month'>
				<div className="month-button">
				<a>Month</a>
				</div>
			</Link>
		</div>,

		<div className='nav-item' key='2'>
			<Link to='/'>
				<img alt='Spacendar' className='logo' src={spacendar} />
			</Link>
		</div>,
	];

	const [navItems, setNavItems] = useState(initialState);

	// add NavBar items to JSX array depending on App login state
	useEffect(() => {
		if (props.isLoggedIn) {
			setNavItems(
				initialState.concat(
					<Dropdown className='nav-item' key='3'>
						<Dropdown.Toggle variant='secondary' id='dropdown-basic'>
							Settings
						</Dropdown.Toggle>

						<Dropdown.Menu>
							<Dropdown.Item
								href='/'
								onClick={() => {
									props.setLogInStatus(false);
								}}>
								Logout
							</Dropdown.Item>
							<Dropdown.Item href='/user'>User Account</Dropdown.Item>
						</Dropdown.Menu>
					</Dropdown>
				)
			);
		} else {
			setNavItems(
				initialState.concat([
					<Dropdown className='nav-item' key='3'>
						<Dropdown.Toggle variant='success' id='dropdown-basic'>
							Settings
						</Dropdown.Toggle>

						<Dropdown.Menu>
							<Dropdown.Item href='/user/signup'>Sign Up</Dropdown.Item>
							<Dropdown.Item href='/user/login'>Login</Dropdown.Item>
							<Dropdown.Item href='/user'>User Account</Dropdown.Item>
						</Dropdown.Menu>
					</Dropdown>,
				])
			);
		}
	}, [props.isLoggedIn]);

	// render JSX
	return <nav className='navbar navbar-expand-lg'>{navItems}</nav>;
	
}
