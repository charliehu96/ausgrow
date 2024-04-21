import React, { useState, useEffect } from "react";
import MapPin from "./MapPin";
import { useInView } from "react-intersection-observer";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { RiAccountCircleLine } from "react-icons/ri";
import image1 from "../../assets/images/cattle-background-1.jpg";

function SearchBar() {
	const titleText = [
		"Integration of beef cattle supply chain",
		"Starlink livestock tracking system",
		"Grand Cattle Fund",
	];

	const { ref, inView } = useInView({
		threshold: 0.5, // Trigger inView true when the element is fully in viewport (0-1)
		triggerOnce: false,
	});

	const [index, setIndex] = useState(0);

	useEffect(() => {
		const intervalId = setInterval(() => {
			setIndex((currentIndex) => (currentIndex + 1) % titleText.length);
		}, 5000);

		return () => clearInterval(intervalId);
	}, [titleText.length]);

	return (
		<div
			className="landing-container bg-cover bg-center"
			style={{
				backgroundSize: "cover",
				height: "100vh",
				backgroundImage: `url(${image1})`,
			}}
		>
			<div className="pl-4 flex m-4 md:p-8 md:absolute md:top-1/2  ">
				<div ref={ref} className="w-full flex-1 ">
					<p
						className={`tag-line mt-10 md:mt-0
				${inView ? "slide-in-left" : "opacity-0"}
				`}
					>
						{titleText[index]}
					</p>
					<div
						className={`md:grid md:grid-cols-12 gap-x-4 				
					${inView ? "slide-in-right" : "opacity-0"}`}
					>
						<div className="relative md:col-span-5 search-container">
							{/* Input box */}
							<input
								id="search-box"
								type="text"
								placeholder="Search..."
								className="w-full h-full p-4 border border-gray-800 placeholder-gray-500 text-gray-900 focus:outline-none"
							/>
							<div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none h-full overflow-hidden">
								{/* <MagnifyingGlass className="h-full w-full text-gray-400" /> */}
								<MapPin className="h-full w-full" />
							</div>
						</div>
						<button className="w-full md:w-auto md:col-span-2 flex items-center justify-center bg-white border-gray-200 hover:bg-gray-300 text-black font-semibold p-4 shadow my-4 md:my-0">
							<FaMagnifyingGlass className="h-6 w-6" />
							<span className="pl-4">Tracking</span>
						</button>
						<button className="col-span-1 flex items-center justify-center bg-black hover:bg-gray-700 text-white font-semibold p-4 border border-gray-800 rounded-xl shadow">
							<RiAccountCircleLine className="h-6 w-6 mr-1" />
							Sign Up
						</button>
						<button className="md:hidden col-span-1 bg-black hover:bg-gray-800 text-white font-semibold p-4 px-8 border border-gray-200 rounded-xl shadow ml-4">
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
								className="hover:text-gray-600 duration-150 ease-in-out"
								href="http://example.com"
							>
								Sign In
							</a>
						</span>
					</div>
				</div>
			</div>
		</div>
	);
}

export default SearchBar;
