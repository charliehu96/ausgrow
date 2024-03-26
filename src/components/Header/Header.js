import React, { useState, useEffect } from "react";
import "./header.css";
import HamburgerMenu from "./HamburgerMenu";

function Header() {
	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			// Set isScrolled to true if page is scrolled beyond a certain point -> 50px
			setIsScrolled(window.scrollY > 50);
		};

		// Add event listener for scroll
		window.addEventListener("scroll", handleScroll);

		// Clean up function to remove the event listener
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<header
			className={`header flex justify-between items-center ${
				isScrolled && "scrolled"
			}`}
		>
			<div className="flex items-center">
				<div className="p-8">
					<HamburgerMenu />
				</div>
				<div className="title">
					<span>Aus</span>
					<span className="title-bold">Grow</span>
					<span className="pl-4">Digital</span>
					<span className="title-bold">Farming</span>
				</div>
			</div>
			<div className="flex flex-1 justify-end buttons md:hidden">
				<button className="bg-black hover:bg-gray-700 text-white font-semibold py-3 px-6 m-3 border border-gray-400 rounded-full shadow">
					Login
				</button>
				<button className="bg-white hover:bg-gray-100 text-black font-semibold p-3 m-3 border border-blue-700 rounded-full shadow">
					Sign Up
				</button>
			</div>
		</header>
	);
}

export default Header;
