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
			<h4>Contributors: </h4>
			<h5>Lianne Aratea, Pierce Goldbeck, Jordan Lind, and Casey Stocker</h5>
			<Link to='/user'>
				Account
			</Link>
			
		</footer>
	);
}
