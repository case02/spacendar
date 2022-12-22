import { useEffect } from 'react';
import './styles.css'
export default function Month(props) {
    return (
        <div className='month-container'>
            <h1>December</h1>
<<<<<<< HEAD
            <div className="month-cal">
                {props.monthImages.map((a, i) => (
                    <div className='day'>
                        <p>{i +1}</p>
                        <img alt='day-pic' src={props.monthImages[i].hdurl} width='200px' />
                    </div>
                ))}
            </div>
            
=======
            {props.monthImages.map((data, i) => (
                <div className='day'>
                    <p>{}</p>
                    <img alt='day-pic' src={data.hdurl} width='200px' />
                    <p>{data.date}</p>
                </div>
            ))}
>>>>>>> f7df9c2 (month and day changes from last night)
        </div>
		);
}