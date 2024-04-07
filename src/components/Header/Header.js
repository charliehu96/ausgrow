import React, { useState, useEffect } from "react";
import "./header.css";
import HamburgerMenu from "./HamburgerMenu";
import SocialIcons from "../SocialIcons/SocialIcons";

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
			className={`header fixed top-0 z-10 flex justify-between items-center ${
				isScrolled && "scrolled"
			}`}
		>
			<div className="flex items-center">
				<div className="p-8">
					<HamburgerMenu />
				</div>
				<div className="title tracking-wider">
					{/* <span>Aus</span>
					<span className="title-bold">Grow</span> */}
					<span className="pl-4">Digital</span>
					<span className="title-bold">Farming</span>
				</div>
			</div>
			<div className="flex flex-1 justify-end buttons hidden md:flex">
				<SocialIcons />
			</div>
		</header>
	);
}

export default Header;
