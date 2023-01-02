// import Comment from '../components/Comment';
import { useEffect, useState } from 'react';
import { getImages } from '../../utils/api';
import { useParams, Link } from 'react-router-dom';
import './styles.css';

export default function Day(props) {
	const { date } = useParams();
	//image url of current day
	const [theDay, setDay] = useState([]);
	//param date states for current/prev/next day
	const [dateState, setDateState] = useState({
		current: '',
		previous: '',
		next: '',
	});
	//when day is 01 previous day link is false
	const [showPrev, setShowPrev] = useState(true);
	//when day is 31 next day link is false
	const [showNext, setShowNext] = useState(true);

	// modify date parameter to add/sub a day
	// refered to https://stackoverflow.com/questions/67291965/add-and-rest-one-day-to-date-string for solution
	function modifyDate(input, dayModification) {
		// converting params string to date object
		const newDate = new Date(`${input} 00:00`);
		// add the dayModification value as days to the date
		newDate.setDate(newDate.getDate() + dayModification);
		// could use date.toISOString or date.toJson to convert date to string; decides date format
		return newDate.toISOString().split('T')[0];
	}
	//show previous day unless its the first day of the month
	//show next day unless its the last day of the month
	function showLink() {
		if (date === '2022-12-01') {
			setShowPrev(false);
		} else {
			setShowPrev(true);
		}
		if (date === '2022-12-31') {
			setShowNext(false);
		} else {
			setShowNext(true);
		}
	}
	const findDay = async () => {
		const day = await props.monthImages.find((item) => item.date === date);
		return setDay(day);
	};

	const [mediaSource, setMediaSource] = useState([]);

	useEffect(() => {
		if (date) {
			findDay();
		}
		if (theDay.media_type === 'image') {
			setMediaSource(
				<img className='card-img' alt={`photo of ${date}`} src={theDay.url} />
			);
		} else {
			setMediaSource(
				<div className='card-img embed-responsive embed-responsive-16by9'>
					<iframe
						className='embed-responsive-item'
						width='80%'
						height='500vh'
						src={theDay.url}
						title='YouTube video player'
						allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
						allowfullscreen></iframe>
				</div>
			);
		}
		showLink();
		setDateState({
			current: date,
			previous: modifyDate(date, -1),
			next: modifyDate(date, +1),
		});
	}, [theDay, date]);

	return (
		<div className='day-container'>
			{theDay && (
				<div className='card'>
					<div className='card-body'>
						<div className='card-header'>
							{showPrev ? (
								<Link
									className='day-link previousDay'
									to={`/day/${dateState.previous}`}>
									{' '}
									&#171;{' '}
								</Link>
							) : null }
							<h1 className='card-title'> {theDay.title} </h1>
							{showNext ?<Link className='day-link nextDay' to={`/day/${dateState.next}`}>
								{' '}
								&#187;{' '}
							</Link> : null }
						</div>
						<div>{mediaSource}</div>
						{theDay.copyright ? <p className='card-text copyright'> copyright: {theDay.copyright}</p> : null}
						<p className='card-text'> {theDay.explanation}</p>
					</div>
				</div>
			)}
		</div>
	);
}
