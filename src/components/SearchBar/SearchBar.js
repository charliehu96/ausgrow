import React from "react";
import MagnifyingGlass from "./MagnifyingGlass";
import MapPin from "./MapPin";
import { useInView } from "react-intersection-observer";

function SearchBar() {
	const { ref, inView } = useInView({
		threshold: 0.5, // Trigger inView true when the element is fully in viewport (0-1)
		triggerOnce: false,
	});

	return (
		<div className="container mx-auto flex">
			{/* Container with responsive classes */}
			<div
				ref={ref}
				className="md:absolute md:top-1/2 transform md:-translate-y-1/2 flex-1 m-4 md:p-4"
			>
				<p
					className={`tag-line mt-10 md:mt-0
				${inView ? "slide-in-left" : "opacity-0"}
				`}
				>
					Integration of beef cattle supply chain
				</p>
				<div
					className={`md:grid md:grid-cols-12 				
					${inView ? "slide-in-right" : "opacity-0"}`}
				>
					<div className="relative md:col-span-4">
						{/* Input box */}
						<input
							id="search-box"
							type="text"
							placeholder="Search..."
							className="w-full h-full p-4 border border-gray-800 placeholder-gray-500 text-gray-900 focus:outline-none"
						/>
						{/* Magnifying glass icon */}
						<div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none h-full overflow-hidden">
							<MagnifyingGlass className="h-full w-full text-gray-400" />
						</div>
					</div>
					<button className="w-full md:w-auto md:col-span-2 flex items-center justify-center bg-black hover:bg-gray-700 text-white font-semibold p-4 shadow md:mr-8 my-4 md:my-0">
						<MapPin className="flex h-5 w-5 text-gray-400" />
						<span className="ml-2">Tracking</span>
					</button>
					<button className="col-span-1 bg-gray-300 bg-white hover:bg-gray-300 text-black font-semibold p-4 px-8 border border-gray-200 rounded-full shadow">
						Sign Up
					</button>
					<button className="md:hidden col-span-1 bg-black hover:bg-gray-800 text-white font-semibold p-4 px-8 border border-gray-200 rounded-full shadow ml-4">
						Sign In
					</button>
				</div>
				<div className="hidden md:block md:w-full md:flex">
					<span
						className={`sign-in ${
							inView ? "slide-in-right" : "hidden"
						}`}
					>
						Or{" "}
						<a
							className="hover:text-white duration-150 ease-in-out"
							href="http://example.com"
						>
							Sign In
						</a>
					</span>
				</div>
			</div>
		</div>
	);
}

export default SearchBar;
