import React from "react";
import "./searchBar.css";

function SearchBar() {
	return (
		<div className="searchBar">
			<input
				type="text"
				placeholder="Search for food, grocery, and more"
			/>
		</div>
	);
}

export default SearchBar;
