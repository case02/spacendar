import './styles.css';
import { Link } from 'react-router-dom';
import wormhole from '../../assets/images/wormhole.jpg';
import Comment from '../../components/Comment';


export default function Month(props) {
	return (
		<div className='month-container'>
				<h1>December</h1>
				<div className='month-cal'>
					<div className='day-map'>
						{props.monthImages.map((day, i) => (
						<Link key={i} to={`/day/${props.monthImages[i].date}`}>
							<div className='d-flex flex-wrap'>
								<div className='date-number'>
									<p>{i + 1}</p>
								</div>

								{props.monthImages[i].media_type === 'image' && (
									<div className='day-content'>
									<img
										alt='day-pic'
										src={props.monthImages[i].hdurl}
										width='230px'
									/>
									</div>
								)}

								{props.monthImages[i].media_type === 'video' && (
									<div className='day-content'>
									<img alt='day-vid' src={wormhole} width='230px' />
									</div>
								)}
							</div>
						</Link>
					))}
					</div>
					</div>
			<div className='comment-section'>
				<Comment />
			</div>
		</div>
	);
}
