import './home.css';

export default function Home(props) {
    // render JSX
    console.log(props)
    return (
        <div className='day-container'>
            <h1>Image of the Day</h1>
            {props.monthImages.length && (
                <div>
                    <img
                        alt='current-day'
                        src={props.monthImages[props.monthImages.length - 1].hdurl}
                    />
                    <div>{props.monthImages[props.monthImages.length - 1].date}</div>
                </div>
            )}
        </div>
    );
}
