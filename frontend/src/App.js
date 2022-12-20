// packages
import axios from 'axios';
import { useEffect, useState } from "react";
import { Routes, Route } from 'react-router-dom';
// pages

// components
import Nav from './components/Nav';
import Footer from './components/Footer';
import Comment from './components/Comment';
// utils

// styles
import './global_styles/App.css';

function App() 
	// state
  const [isLoggedIn, setLogInStatus] = useState(false);
  // requested image of particular date 
	const [images, setImages] = useState([]);
  // requested date
  const [date, setDate] = useState([]);
	// const [searchString, setSearchString] = useState('minions');
	// const [lastSearch, setLastSearch] = useState('');
	
	
	// APOD searcher function
	function getImages(searchString) {
		/* Build a URL from the searchOptions object */
    const key = process.env.REACT_APP_GIPHY_KEY;
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

			{/* Footer */}
			<Footer />

			{/* ROUTES */}
			<Routes>
				{/* <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp/>} /> */}
			</Routes>
		</div>
	);
}

export default App;