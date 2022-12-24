import './month.css';
import './styles.css';
import { Link } from 'react-router-dom';
import Comment from '../../components/Comment';
import Day from '../Day/index';

export default function Month(props) {

	// function handleClick = (event) => {
	// 	event.preventDefault();
    //     Navigate(`/day/{}`)
	// }
	return (
		<div className='month-container'>
			<h1>December</h1>
			<div className='month-cal'>
				{props.monthImages.map((a, i) => (
					<Link to={`/day/{props.monthImages[i].date}`}>
							<div className='d-flex flex-wrap align-content-xl-stretch'>
								<div className='date-number'>
									<p>{i + 1}</p>
								</div>
								<img
									alt='day-pic'
									src={props.monthImages[i].hdurl}
									width='230px'
								/>
							</div>
					</Link>
				))}
			</div>
			<div>
				<Day />
				<Comment />
			</div>
		</div>
	);
}
