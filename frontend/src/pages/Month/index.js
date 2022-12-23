import './month.css';
import './styles.css';

import Comment from '../../components/Comment';

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
            </div> */}

			<div className='month-cal'>
				{props.monthImages.map((a, i) => (
					<div className='day' className='d-flex flex-wrap align-content-xl-stretch'>
						<div className='date-number'>
							<p>{i + 1}</p>
						</div>
						<img alt='day-pic' src={props.monthImages[i].hdurl} width='230px' />
					</div>
				))}
			</div>
			<div>
				<Comment />
			</div>
		</div>
	);
}
