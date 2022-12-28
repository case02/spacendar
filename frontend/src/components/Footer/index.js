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
			<h6>
				<a href='https://github.com/lianneb10'>Lianne Aratea</a>,
				<a href='https://github.com/piercegoldbeck'>Pierce Goldbeck</a>,
				<a href='https://github.com/gititgrl'>Jordan Lind</a>, and
				<a href='https://github.com/case02'>Casey Stocker</a>
			</h6>
		</footer>
	);
}
