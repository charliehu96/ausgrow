import React from "react";
import SocialIcons from "../SocialIcons/SocialIcons";
import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<footer className="m-1">
			{/* Thin line */}
			<hr className="border-t border-gray-400 mb-8" />

			<div className="py-4 grid grid-cols-1 md:grid-cols-3 gap-8 gap-x-32 ">
				<div className="text-2xl col-span-1">
					<span>Digital</span>
					<span className="font-bold">Farming</span>
				</div>
				<div className="col-span-2 grid grid-cols-2 gap-8 gap-x-32 ">
					<a
						href="www.example.com"
						className="hover:text-blue-500 text-xs text-black md:text-base"
					>
						Home
					</a>
					<a
						href="www.example.com"
						className="hover:text-blue-500 text-xs text-black md:text-base"
					>
						Contact us
					</a>
					<Link
						to="/about"
						className="hover:text-blue-500 text-xs text-black md:text-base"
					>
						About us
					</Link>
					<a
						href="www.example.com"
						className="hover:text-blue-500 text-xs text-black md:text-base"
					>
						Privacy policy
					</a>
					<a
						href="www.example.com"
						className="hover:text-blue-500 text-xs text-black md:text-base"
					>
						Our solutions
					</a>
					<a
						href="www.example.com"
						className="hover:text-blue-500 text-xs text-black md:text-base"
					>
						Terms of service
					</a>
					<a
						href="www.example.com"
						className="hover:text-blue-500 text-xs text-black md:text-base"
					>
						Starlink trackers
					</a>
					<a
						href="www.example.com"
						className="hover:text-blue-500 text-xs text-black md:text-base"
					>
						Copyright
					</a>
					<a
						href="www.example.com"
						className="hover:text-blue-500 text-xs text-black md:text-base"
					>
						Your Dashboard
					</a>
					<a
						href="www.example.com"
						className="hover:text-blue-500 text-xs text-black md:text-base"
					>
						Sign up
					</a>
					<a
						href="www.example.com"
						className="hover:text-blue-500 text-xs text-black md:text-base"
					>
						Sitemap
					</a>
					<a
						href="www.example.com"
						className="hover:text-blue-500 text-xs text-black md:text-base"
					>
						Log in
					</a>
				</div>
			</div>

			{/* Thin line */}
			<hr className="border-t border-gray-400 mt-8 pt-4" />

			<div className="flex justify-between items-center justify-center">
				<div>
					<SocialIcons />
				</div>
				<div className="flex justify-between">
					<p className="text-xs md:text-sm mx-2">Privacy Policy</p>
					<p className="text-xs md:text-sm mx-2">Terms of Service</p>
					<p className="text-xs md:text-sm mx-2">
						Copyright © NextGen Digital Applications Pty Ltd
					</p>
					<p className="text-xs md:text-sm ml-2">
						ABN:19 675 197 270
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
