export default function Home(props) {
    // render JSX
    return (
        <div className='day-container'>
            {props.monthImages.length && (
                <img
                    alt='current-day'
                    src={props.monthImages[props.monthImages.length - 1].hdurl}width="100%"
                />
            )}
        </div>
    );
}