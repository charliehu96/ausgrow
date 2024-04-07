import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGrid from "./components/ImageGrid/ImageGrid";
import MapComponent from "./components/MapComponent/MapComponent";
import Footer from "./components/Footer/Footer";

function App() {
	return (
		<div className="App">
			<Header />
			<div>
				<SearchBar />
			</div>
			<div className="p-6 m-6">
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
