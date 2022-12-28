import './home.css';

export default function Home(props) {
    // render JSX
    return (
        <div className='day-container'>
            {props.monthImages.length && (
                <div className="home">
                    <img
                        alt='current-day'
                        src={props.monthImages[props.monthImages.length - 1].hdurl}
                    />
                </div>
            )}
        </div>
    );
}
