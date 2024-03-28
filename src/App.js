import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import SearchBar from "./components/SearchBar/SearchBar";
import LandingPage from "./components/LandingPage/LandingPage";
import ImageGrid from "./components/ImageGrid/ImageGrid";
import MapComponent from "./components/MapComponent/MapComponent";

function App() {
	return (
		<div className="App">
			<div className="landing-container bg-cover bg-center">
				<Header />
				<SearchBar />
			</div>
			<div className="p-8 m-8">
				<ImageGrid />
				<MapComponent />
			</div>
			<LandingPage />
		</div>
	);
}

export default App;
