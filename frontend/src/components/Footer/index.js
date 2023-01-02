import './styles.css';
import { Link } from 'react-router-dom';

export default function Footer() {
	return (
		<footer>
			<a
				className='link'
				href='https://apod.nasa.gov/apod/calendar/allyears.html'
				target='_blank'
				rel='noreferrer'>
				NASA APOD
			</a>
			<Link className='link' to='/user'>
				My Account
			</Link>
			<h5>Contributors: </h5>
			<h6>
				<a
					className='link'
					href='https://github.com/lianneb10'
					target='_blank'
					rel='noreferrer'>
					Lianne Aratea
				</a>
				,
				<a
					className='link'
					href='https://github.com/piercegoldbeck'
					target='_blank'
					rel='noreferrer'>
					Pierce Goldbeck
				</a>
				,
				<a
					className='link'
					href='https://github.com/gititgrl'
					target='_blank'
					rel='noreferrer'>
					Jordan Lind
				</a>
				, and
				<a
					className='link'
					href='https://github.com/case02'
					target='_blank'
					rel='noreferrer'>
					Casey Stocker
				</a>
			</h6>
		</footer>
	);
}
