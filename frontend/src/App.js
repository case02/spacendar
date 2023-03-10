// packages
import { useEffect, useState } from "react";
import { Routes, Route } from 'react-router-dom';

// pages
import SignUp from "./pages/SignUp";
import LogIn from "./pages/LogIn";
import Home from "./pages/Home";
import User from "./pages/User";
import Month from "./pages/Month";
import Day from "./pages/Day";

// components
import Nav from "./components/Nav";
import Footer from "./components/Footer";

// utils
import { getUser } from './utils/api';
// styles
import "./global_styles/App.css";

function App() {
	// state
	const [isLoggedIn, setLogInStatus] = useState(false);
	const [user, setUser] = useState([]);
	// Api data
	const [monthImages, setMonthImages] = useState([]);
	const [media_type, setMedia_type] = useState([]);

	// APOD searcher function
	function getImages() {
		/* Build a URL from the searchOptions object */
		// const key = process.env.REACT_APP_APOD_KEY;
		const url =
			'https://api.nasa.gov/planetary/apod?api_key=9lSTCZNq5GoBuU3lchGbDwvD6dGM7q1hwhF4tP5V&start_date=2022-12-01&end_date=2022-12-31';
		fetch(url)
			.then((response) => response.json())
			.then((response) => {
				setMonthImages(response);
				setMedia_type(response);
			})
			.catch(console.error);
	}
	//useEffect 
	useEffect(() => {
		if (localStorage.token) {
			setLogInStatus(true);
			try {getUser(localStorage.user_Id)
                .then((foundUser) => {
					setUser(foundUser.user);
				})
			} catch (error) {
                console.log(error);
			};
		}
		getImages();
	}, []);

	return (
		<div>
			{/* Header */}
			<Nav
				isLoggedIn={isLoggedIn}
				setLogInStatus={setLogInStatus}
				setUser={setUser}
				user={user}
			/>

			{/* Footer */}
			<Footer />

			{/* ROUTES */}
			<Routes>
				<Route path='/' element={<Home monthImages={monthImages} />} />
				<Route
					path='/user-info'
					element={<User user={user} setLogInStatus={setLogInStatus} />}
				/>
				<Route
					path='/month'
					element={<Month monthImages={monthImages} media_type={media_type} />}
				/>
				<Route
					path='/day/:date'
					element={<Day monthImages={monthImages} media_type={media_type} />}
				/>
				<Route
					path='/login'
					element={
						<LogIn
							isLoggedIn={isLoggedIn}
							setLogInStatus={setLogInStatus}
							setUser={setUser}
							user={user}
						/>
					}
				/>
				<Route
					path='/signup'
					element={
						<SignUp isLoggedIn={isLoggedIn} setLogInStatus={setLogInStatus} setUser={setUser}/>
					}
				/>
			</Routes>
		</div>
	);
}

export default App;
