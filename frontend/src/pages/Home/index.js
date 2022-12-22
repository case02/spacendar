<<<<<<< HEAD
=======
import './home.css';

>>>>>>> dev
export default function Home(props) {
    // render JSX
    return (
        <div className='day-container'>
            {props.monthImages.length && (
                <img
                    alt='current-day'
<<<<<<< HEAD
                    src={props.monthImages[props.monthImages.length - 1].hdurl}width="100%"
=======
                    src={props.monthImages[props.monthImages.length - 1].hdurl}
>>>>>>> dev
                />
            )}
        </div>
    );
}