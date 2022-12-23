
import './month.css';


export default function Month(props) {
    return (
        <div className='month-container'>
            <h1>December</h1>

            <div className="wk1">
                {props.monthImages.slice(0,7).map((a, i) => {
                    return (
                        <div class="test">
                        <img alt= 'day' src={props.monthImages[i].hdurl} width='200px'/>
                        </div>
                    )
                })}
            </div>

            <div className="wk2">
                {props.monthImages.slice(8,14).map((a, i) => {
                    return (
                        <div class="test">
                        <img alt= 'day' src={props.monthImages[i].hdurl} width='200px'/>
                        </div>
                    )
                })}
            </div>


            {/* // {props.monthImages.map((a, i) => (
            //     <div className='day'>
            //         <p>{i +1}</p>
            //         <img alt='day-pic' src={props.monthImages[i].hdurl} width='200px' />
            //     </div>
            // ))} */}
        </div> 
		)}