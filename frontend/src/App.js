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
	// const [searchString, setSearchString] = useState('minions');
	// const [lastSearch, setLastSearch] = useState('');

	 useEffect(() => {
			if (localStorage.token) {
				setLogInStatus(true);
			}
		}, []);

	// APOD searcher function
	function getImages(searchString) {
		/* Build a URL from the searchOptions object */
    const key = process.env.REACT_APP_APOD_KEY;
	setDate('2014 - 10 - 01');
		const url = `https://api.nasa.gov/planetary/apod?api_key=${key}&date=${date}`;
		fetch(url)
			.then((response) => response.json())
			.then((response) => {
				setImages(response.url);
			})
			.catch(console.error);
	}

	return (
		<div>
			{/* Header */}
			<Nav isLoggedIn={isLoggedIn} setLogInStatus={setLogInStatus} />

			{/* Main Content */}
			<h1>{images}</h1>
			{/* Footer */}
			<Footer />

			{/* ROUTES */}
			<Routes>
				{/* <Route path='/' element={<Home />} /> */}
				{/* commented out routes are pages that are not built yet */}
				{/* <Route path='/month' element={<Month />} /> */}
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