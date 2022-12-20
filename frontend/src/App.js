// packages

// pages

// components

// styles
import './global_styles/App.css';

function App() {
   const [isLoggedIn, setLogInStatus] = useState(false);
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