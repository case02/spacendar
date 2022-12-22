import './styles.css'
export default function Footer() {
    return (
			<footer>
				<img
					alt='Spacendar'
					className='logo'
					src='frontend/src/assets/images/spacendar.png'
					width='200px'
				/>
				<h4>Contributors: </h4>
				<h5>Lianne Aratea, Pierce Goldbeck, Jordan Lind, and Casey Stocker</h5>
				<a href ="https://apod.nasa.gov/apod/calendar/allyears.html">NASA APOD Inspiration</a>
				
			</footer>
		);
}