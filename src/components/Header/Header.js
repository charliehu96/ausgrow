import React, { useState, useEffect } from "react";
import "./header.css";
import SocialIcons from "../SocialIcons/SocialIcons";
import PopupMenu from "../PopupMenu/PopupMenu";

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
			className={`header fixed top-0 py-2 z-10 flex justify-between items-center ${
				isScrolled && "scrolled"
			}`}
		>
			<div className="flex items-center">
				<div className="p-2 ml-8">
					{/* <HamburgerMenu /> */}
					<PopupMenu />
				</div>
				<div className="title tracking-wider">
					<span>Digital</span>
					<span className="title-bold">Farming</span>
				</div>
			</div>
			<div className="flex flex-1 justify-end buttons mr-4 hidden md:flex">
				<SocialIcons />
			</div>
		</header>
	);
}

export default Header;
