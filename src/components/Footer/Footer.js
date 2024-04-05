import React from "react";
import SocialIcons from "../SocialIcons/SocialIcons";

const Footer = () => {
	return (
		<footer className="m-4">
			{/* Thin line */}
			<hr className="border-t border-gray-400 mb-8" />

			<div className="py-4 grid grid-cols-1 md:grid-cols-3 gap-8">
				<div className="text-2xl col-span-1">
					<span>Digital</span>
					<span className="font-bold">Farming</span>
				</div>
				<div className="col-span-2 grid grid-cols-2 gap-8">
					<a
						href="www.example.com"
						className="hover:text-blue-500 text-xs md:text-base"
					>
						Home
					</a>
					<a
						href="www.example.com"
						className="hover:text-blue-500 text-xs md:text-base"
					>
						Contact us
					</a>
					<a
						href="www.example.com"
						className="hover:text-blue-500 text-xs md:text-base"
					>
						About us
					</a>
					<a
						href="www.example.com"
						className="hover:text-blue-500 text-xs md:text-base"
					>
						Privacy policy
					</a>
					<a
						href="www.example.com"
						className="hover:text-blue-500 text-xs md:text-base"
					>
						Our solutions
					</a>
					<a
						href="www.example.com"
						className="hover:text-blue-500 text-xs md:text-base"
					>
						Terms of service
					</a>
					<a
						href="www.example.com"
						className="hover:text-blue-500 text-xs md:text-base"
					>
						Starlink trackers
					</a>
					<a
						href="www.example.com"
						className="hover:text-blue-500 text-xs md:text-base"
					>
						Copyright
					</a>
					<a
						href="www.example.com"
						className="hover:text-blue-500 text-xs md:text-base"
					>
						Your Dashboard
					</a>
					<a
						href="www.example.com"
						className="hover:text-blue-500 text-xs md:text-base"
					>
						Sign up
					</a>
					<a
						href="www.example.com"
						className="hover:text-blue-500 text-xs md:text-base"
					>
						Sitemap
					</a>
					<a
						href="www.example.com"
						className="hover:text-blue-500 text-xs md:text-base"
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
					<p className="text-xs md:text-sm">Privacy Policy</p>
					<p className="text-xs md:text-sm mx-4">Terms of Service</p>
					<p className="text-xs md:text-sm">Copyright © NextGen</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
