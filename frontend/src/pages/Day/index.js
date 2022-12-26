// import Comment from '../components/Comment';
import { useEffect, useState } from "react";
import { getImages } from "../../utils/api";
import { useParams, Link } from "react-router-dom";
import "./styles.css";


export default function Day(props) {
	const { date } = useParams();
	const [theDay, setDay] = useState([]);
	const [previousDay, setPreviousDay] = useState(date);
	const [nextDay, setNextDay] = useState(Date);
	console.log(
		
	);

	const findDay = async () => {
		const day = await props.monthImages.find((item) => item.date === date);
		return setDay(day);
	};

	useEffect(() => {
		if (date) findDay()	
	}, [theDay]);


	// // access the URL `id` parameter and convert it to an integer
	// let { id } = useParams();
	// id = parseInt(id);

    // useEffect(() => {
    //     //if the 
    //     if (props.monthImages.date === )
    // })

	return (
		<div className='day-container'>

			{theDay && (<div className="card">
				<span className="card-title">
					<Link className="nextDay" to={`/day/${theDay.id}`}> &#171; </Link>
					<h2> {theDay.title}</h2>
					<Link className="previousDay" to={`/day/${theDay.id}`}> &#187; </Link>
				</span>
				
				<img alt={`photo of ${date}`} src={theDay.url} />
				<p> {theDay.copyright}</p>
				<p> Explanation: {theDay.explanation}</p>
			</div>) }
		</div>
	);
}
