import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import AboutPage from "./components/AboutPage/AboutPage";
import SolutionsPage from "./components/SolutionsPage/SolutionsPage";
import StarlinkPage from "./components/StarlinkPage/StarlinkPage";

function App() {
	return (
		<Router>
			<div>
				{/* App-level components like navigation */}
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/about" element={<AboutPage />} />
					<Route path="/solutions" element={<SolutionsPage />} />
					<Route path="/starlink" element={<StarlinkPage />} />
				</Routes>
			</div>
		</Router>
	);
}

export default App;
