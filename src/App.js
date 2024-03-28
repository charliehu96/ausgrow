import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import SearchBar from "./components/SearchBar/SearchBar";
import LandingPage from "./components/LandingPage/LandingPage";
import ImageGrid from "./components/ImageGrid/ImageGrid";
import MapComponent from "./components/MapComponent/MapComponent";
import Footer from "./components/Footer/Footer";
import BackgroundVideo from "./components/BackgroundVideo/BackgroundVideo";

function App() {
	return (
		<div className="App">
			<div className="landing-container bg-cover bg-center">
				<Header />
				<SearchBar />
			</div>
			<div className="p-8 m-8">
				<ImageGrid />
			</div>
			<div className="px-16 py-1 bg-gray-50">
				<MapComponent />
				<Footer />
			</div>
			{/* <BackgroundVideo /> */}
		</div>
	);
}

export default App;
