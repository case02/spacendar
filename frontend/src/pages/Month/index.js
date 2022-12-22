<<<<<<< HEAD

=======
import { useEffect } from 'react';
>>>>>>> dev
export default function Month(props) {
    return (
        <div className='month-container'>
            <h1>December</h1>
            {props.monthImages.map((a, i) => (
                <div className='day'>
                    <p>{i +1}</p>
                    <img alt='day-pic' src={props.monthImages[i].hdurl} width='200px' />
                </div>
            ))}
        </div>
		);
}