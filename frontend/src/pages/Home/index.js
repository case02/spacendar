import './home.css';

export default function Home(props) {
    // render JSX
    console.log(props)
    return (
        <div className='day-container'>
            {props.monthImages.length && (
                <div class="home">
                    <img
                        alt='current-day'
                        src={props.monthImages[props.monthImages.length - 1].hdurl}
                    />
                </div>
            )}
        </div>
    );
}
