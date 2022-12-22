// packages
import axios from 'axios';
import { useEffect, useState } from "react";
import { Routes, Route } from 'react-router-dom';

// pages
import SignUp from './pages/SignUp';
import LogIn from './pages/LogIn';
import Home from './pages/Home';
import About from './pages/About';
import User from './pages/User';
import Day from './pages/Day';
import Month from './pages/Month';

// components
import Nav from './components/Nav';
import Footer from './components/Footer';
import Comment from './components/Comment';

// utils

// styles
import './global_styles/App.css';


function App() {
	// state
	const [isLoggedIn, setLogInStatus] = useState(false);
	// requested image of particular date 
	const [images, setImages] = useState([]);
  	// requested date
  	const [date, setDate] = useState([]);
	const [monthImages, setMonthImages] = useState([]);

	 

	// APOD searcher function
	function getImages() {
		/* Build a URL from the searchOptions object */
    	// const key = process.env.REACT_APP_APOD_KEY;
		const url = 'https://api.nasa.gov/planetary/apod?api_key=9lSTCZNq5GoBuU3lchGbDwvD6dGM7q1hwhF4tP5V&start_date=2022-12-01&end_date=2022-12-21';  
		fetch(url)
			.then((response) => response.json())
			.then((response) => {
				setMonthImages(response);
			})
			.catch(console.error);
	}
	useEffect(() => {
				if (localStorage.token) {
					setLogInStatus(true);
				}
				getImages();
				
			}, []);
	return (
		<div>
			{/* Header */}
			<Nav isLoggedIn={isLoggedIn} setLogInStatus={setLogInStatus} />

			{/* Main Content */}

			{/* Footer */}
			<Footer />

			{/* ROUTES */}
			<Routes>
				<Route path='/' element={<Home monthImages={monthImages} />} />
				<Route path='/month' element={<Month monthImages={monthImages} />} />
				<Route
					path='/user/login'
					element={
						<LogIn isLoggedIn={isLoggedIn} setLogInStatus={setLogInStatus} />
					}
				/>
				<Route
					path='/user/signup'
					element={
						<SignUp isLoggedIn={isLoggedIn} setLogInStatus={setLogInStatus} />
					}
				/>
				{/* <Route path='/user/:id' element={<User />} /> */}
			</Routes>
		</div>
	);
}

export default App;