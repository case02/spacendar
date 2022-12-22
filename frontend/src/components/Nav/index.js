// packages
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import spacendar from '../../assets/images/spacendar.png';

// styles
import './styles.css';

export default function Nav(props) {
	// state declaration: build JSX array of NavBar items
	const initialState = [
		<div className='nav-item' key='1'>
			<Link to='/month'>
				<h1>Month</h1>
			</Link>
		</div>,

		<div className='nav-item' key='2'>
			<Link to='/'>
				<img alt='Spacendar' className='logo' src={spacendar} width='400px' />
			</Link>
		</div>,
	];

	const [navItems, setNavItems] = useState(initialState);

	// add NavBar items to JSX array depending on App login state
	useEffect(() => {
		if (props.isLoggedIn) {
			setNavItems(
				initialState.concat(
					<div className='nav-item' key='3'>
						<Button
							class='btn btn-outline-light btn-lg'
							onClick={() => {
								props.setLogInStatus(false);
							}}>
							Log Out
						</Button>
					</div>
				)
			);
		} else {
			setNavItems(
				initialState.concat([
					<div className='nav-item' key='3'>
						<Link to='/user/signup'>
							<Button class='btn btn-outline-light btn-lg'>Sign Up</Button>
						</Link>
						<Link to='/user/login'>
							<Button class='btn btn-outline-light btn-lg'>Log In</Button>
						</Link>
					</div>,
				])
			);
		}
	}, [props.isLoggedIn]);

	// render JSX
	return <nav>{navItems}</nav>;
}
