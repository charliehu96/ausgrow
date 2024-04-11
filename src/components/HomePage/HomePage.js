import React from "react";
import "../../App.css";
import Header from "../../components/Header/Header";
import SearchBar from "../../components/SearchBar/SearchBar";
import ImageGrid from "../../components/ImageGrid/ImageGrid";
import MapComponent from "../../components/MapComponent/MapComponent";
import Footer from "../../components/Footer/Footer";

function HomePage() {
	return (
		<div className="App">
			<Header />
			<div>
				<SearchBar />
			</div>
			<div className="p-2 m-6">
				<ImageGrid />
			</div>
			<div className="px-10 py-1 bg-gray-50">
				<MapComponent />
				<Footer />
			</div>
			{/* <BackgroundVideo /> */}
		</div>
	);
}

export default HomePage;
