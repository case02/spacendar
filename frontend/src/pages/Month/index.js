import './styles.css';
import { Link } from 'react-router-dom';
import wormhole from '../../assets/images/wormhole.jpg';
import Comment from '../../components/Comment';


export default function Month(props) {
	return (
		<div className='month-container'>
			<div className='month-cal'>
				<h1>December</h1>
				<div className='days-of-week'>
					<div>Sunday</div>
					<div>Monday</div>
					<div>Tuesday</div>
					<div>Wednesday</div>
					<div>Thursday</div>
					<div>Friday</div>
					<div>Saturday</div>
				</div>
				<div className='blank-day'></div>
				<div className='blank-day'></div>
				<div className='blank-day'></div>
				<div className='blank-day'></div>
				{props.monthImages.map((day, i) => (
					<Link key={i} to={`/day/${props.monthImages[i].date}`}>
						<div className='d-flex flex-wrap align-content-xl-stretch'>
							<div className='date-number'>
								<p>{i + 1}</p>
							</div>

							{props.monthImages[i].media_type === 'image' && (
								<img
									alt='day-pic'
									src={props.monthImages[i].hdurl}
									width='230px'
								/>
							)}

							{props.monthImages[i].media_type === 'video' && (
								<img alt='day-vid' src={wormhole} width='230px' />
							)}
						</div>
					</Link>
				))}
			</div>
			<div className='comment-section'>
				<Comment />
			</div>
		</div>
	);
}
