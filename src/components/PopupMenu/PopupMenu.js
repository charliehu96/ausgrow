import React, { useState } from "react";
import HamburgerMenu from "./HamburgerMenu";
import { Link } from "react-router-dom";

function PopupMenu() {
	const [isOpen, setIsOpen] = useState(false);

	const togglePane = () => setIsOpen(!isOpen);

	return (
		<div className="relative">
			{/* Hamburger Icon */}
			<button
				onClick={togglePane}
				className="p-2 text-gray-700 focus:outline-none"
			>
				<HamburgerMenu />
			</button>

			{/* Navigation Pane */}
			<div
				className={`fixed top-0 left-0 z-40 h-full bg-white w-64 transform ${
					isOpen ? "translate-x-0" : "-translate-x-full"
				} transition-transform duration-300 ease-in-out`}
			>
				{/* Close Icon */}
				<button
					onClick={togglePane}
					className="p-4 text-gray-700 focus:outline-none"
				>
					<svg
						className="w-6 h-6"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M6 18L18 6M6 6l12 12"
						></path>
					</svg>
				</button>

				{/* Navigation Links */}
				<nav>
					<ul className="flex flex-col p-4">
						<li className="my-2">
							<Link
								to="/"
								className="text-gray-700 hover:text-gray-900"
							>
								Home
							</Link>
						</li>
						<li className="my-2">
							<Link
								to="/about"
								className="text-gray-700 hover:text-gray-900"
							>
								About Us
							</Link>
						</li>
						<li className="my-2">
							<Link
								to="/solutions"
								className="text-gray-700 hover:text-gray-900"
							>
								Our Solutions
							</Link>
						</li>
						<li className="my-2">
							<Link
								to="/starlink"
								className="text-gray-700 hover:text-gray-900"
							>
								Starlink Trackers
							</Link>
						</li>
					</ul>
				</nav>
			</div>
		</div>
	);
}

export default PopupMenu;
