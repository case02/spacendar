// import Comment from '../components/Comment';
import { useEffect, useState } from "react";
import { getImages } from "../../utils/api";
import { useParams } from "react-router-dom";

export default function Day(props) {
	// const [currentDay, setCurrentDay] = useState({});

	// // access the URL `id` parameter and convert it to an integer
	// let { id } = useParams();
	// id = parseInt(id);

    // useEffect(() => {
    //     //if the 
    //     if (props.monthImages.date === )
    // })

	return (
		<div className='day-container'>
	 		{/* <Comment /> */}
			<h1>Show Day</h1>
            {/* <p> {currentDay.copyright} </p>*/}
			{/* <h2> {currentDay.title}</h2>
            <p>{currentDay</p> */}
		</div>
	);
}
