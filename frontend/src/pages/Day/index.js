// import Comment from '../components/Comment';
import { useEffect, useState } from "react";
import { getImages } from "../../utils/api";
import { useParams, Link } from "react-router-dom";
import "./styles.css";


export default function Day(props) {
	const {date} = useParams();
	//image url of current day
	const [theDay, setDay] = useState([]);
	//param date states for current/prev/next day
	const [dateState, setDateState] = useState({
		current: '',
		previous: '',
		next: '',
	});
	
   
	// const [currentDay, setCurrentDay] = useState(date);
	// const [previousDay, setPreviousDay] = useState(modifyDate(currentDay, -1));
	// const [nextDay, setNextDay] = useState(modifyDate(currentDay, +1));

	// modify date parameter to add/sub a day
	function modifyDate(input, dayModification) {
		// regex that will match ####-##-## where # is a number
		const isDateOnlyRegex = /^\d{4}-\d{2}-\d{2}$/;

		// javascript will natively understand both formats when parsing a string to Date
		const newDate = new Date(`${input} 00:00`);
		// add the dayModification value as days to the date
		newDate.setDate(newDate.getDate() + dayModification);

		// check if it's a dateOnly string
		if (isDateOnlyRegex.test(input)) {
			// using string format to return yyyy-MM-dd format
			return `${newDate.getFullYear()}-${newDate.getMonth() + 1}-${newDate.getDate()}`;
		}
		// date.toJSON returns yyyy-MM-ddTHH:mm:ss.SSSZ
		// could also use date.toISOString
		return newDate.toJSON();
	}

	const findDay = async () => {
		const day = await props.monthImages.find((item) => item.date === date);
		return setDay(day);
	};

	useEffect(() => {
		if (date) {findDay()};
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
					<span className='card-title'>
						<Link
							className='previoustDay'
							to={`/day/${dateState.previous}`}>
							{' '}
							&#171;{' '}
						</Link>
						<h2> {theDay.title}</h2>
						<Link
							className='nextDay'
							to={`/day/${dateState.next}`}>
							{' '}
							&#187;{' '}
						</Link>
					</span>

					<img alt={`photo of ${date}`} src={theDay.url} />
					<p> {theDay.copyright}</p>
					<p> Explanation: {theDay.explanation}</p>
				</div>
			)}
		</div>
	);
}
