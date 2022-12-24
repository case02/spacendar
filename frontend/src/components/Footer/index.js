import './styles.css';
import { Link } from 'react-router-dom';

export default function Footer() {
	return (
		<footer>
			<a
				className='link'
				href='https://apod.nasa.gov/apod/calendar/allyears.html'>
				NASA APOD
			</a>
			<Link className='link' to='/user'>
				My Account
			</Link>
			<h5>Contributors: </h5>
			<h6>Lianne Aratea, Pierce Goldbeck, Jordan Lind, and Casey Stocker</h6>
					
		</footer>
	);
}
