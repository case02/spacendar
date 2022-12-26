// import Comment from '../components/Comment';
import { useEffect, useState } from "react";
import { getImages } from "../../utils/api";
import { useParams } from "react-router-dom";

export default function Day(props) {
	const { date } = useParams();
	const [theDay, setDay] = useState([]);
	

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
		<div>
			{theDay && (<div className='day-container'>
				{/* <Comment /> */}
				{/* {dayUrl.map((url) => ( <img alt={`photo of ${date}`} src={url} /> ))} */}
				<h2> {theDay.title}</h2>
				<img alt={`photo of ${date}`} src={theDay.url} />
				<p> {theDay.copyright}</p>
				<p> Explanation: {theDay.explanation}</p>
			</div>) }
		</div>
	);
}
