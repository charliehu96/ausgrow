import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import SearchBar from "./components/SearchBar/SearchBar";
import LandingPage from "./components/LandingPage/LandingPage";
import PhotoGrid from "./components/PhotoGrid/PhotoGrid";

function App() {
	return (
		<div className="App">
			<div className="landing-container bg-cover bg-center bg-no-repeat">
				<Header />
				<SearchBar />
				<LandingPage />
			</div>
			{/* Further components */}
			<PhotoGrid />
		</div>
	);
}

export default App;
