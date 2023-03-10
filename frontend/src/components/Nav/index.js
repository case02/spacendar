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
	//logout handle
	const handleLogout = () => {
		props.setUser({});
		localStorage.clear();
	};
	// state declaration: build JSX array of NavBar items
	const initialState = [
		<div className='nav-item' key='1'>
			<Link to='/month'>
				<div className="month-button">

				<h3>Month</h3>

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
						</Dropdown.Toggle>

						<Dropdown.Menu>
							<Dropdown.Item
								href='/'
								onClick={() => {
									props.setLogInStatus(false);
									handleLogout();
								}}>
								Logout
							</Dropdown.Item>
							<Dropdown.Divider />
							<Dropdown.Item href='/user-info'>User Account</Dropdown.Item>
						</Dropdown.Menu>
					</Dropdown>
				)
			);
		} else {
			setNavItems(
				initialState.concat([
					<Dropdown className='nav-item' key='3'>
						<Dropdown.Toggle variant='primary' id='dropdown-basic'>
						
						</Dropdown.Toggle>

						<Dropdown.Menu>
							<Dropdown.Item href='/signup'>Sign Up</Dropdown.Item>
							<Dropdown.Item href='/login'>Login</Dropdown.Item>
							<Dropdown.Divider />
							<Dropdown.Item href='/user-info'>User Account</Dropdown.Item>
						</Dropdown.Menu>
					</Dropdown>,
				])
			);
		}
	}, [props.isLoggedIn]);

	// render JSX
	return <nav className='navbar navbar-expand-lg'>{navItems}</nav>;
	
}
