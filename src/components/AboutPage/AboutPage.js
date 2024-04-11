import React from "react";
import Header from "../Header/Header";
import aboutHeroImage from "../../assets/images/about-hero.jpg";

function AboutPage() {
	return (
		<div className="min-h-screen flex flex-col">
			<Header />
			{/* Hero Section */}
			<div
				className="text-center text-white py-20 grid place-items-center h-screen"
				style={{
					backgroundImage: `url(${aboutHeroImage})`,
					backgroundSize: "cover",
					backgroundPosition: "center",
					height: "65vh",
				}}
			>
				<h1 className="text-5xl font-bold">About Us</h1>
				<p className="text-xl">Designing the future, together</p>
			</div>

			{/* Content Section */}
			<div className="flex-1 container mx-auto px-24 py-16">
				<div className="my-8">
					<h2 className="text-3xl font-bold text-gray-800 mb-4">
						Our Philosophy
					</h2>
					<p className="text-gray-600 text-lg">
						We are dedicated to bring great value for the grand
						cattle industry in Australia by integrating beef cattle
						supply chain with application of digital farming.
					</p>
				</div>
				<div className="my-8">
					<h2 className="text-3xl font-bold text-gray-800 mb-4">
						Our Partners
					</h2>
					<p className="text-gray-600 text-lg">
						We are working closely together in this unique grand
						cattle industry with our industrial partners such as
						cattle farm, auction yard, cattle feedlot, abattoir,
						exporter, and beef product distributor.
					</p>
				</div>
				<div className="my-8">
					<h2 className="text-3xl font-bold text-gray-800 mb-4">
						Our Team
					</h2>
					<p className="text-gray-600 text-lg">
						We believe that recruit and hire great people is the key
						factor to building up a business successfully. Our
						operational team members are working super hard with
						their intensive knowledge bases and skills.
					</p>
				</div>
				<div className="my-8">
					<h2 className="text-3xl font-bold text-gray-800 mb-4">
						Integrated Beef Cattle Supply Chain
					</h2>
					<p className="text-gray-600 text-lg">
						We are aiming to integrate beef cattle supply chain with
						digital farming applications and cutting-edge internet
						technologies such as blockchain and artificial
						intelligence.
					</p>
				</div>
				<div className="my-8">
					<h2 className="text-3xl font-bold text-gray-800 mb-4">
						Starlink Livestock Tracking System
					</h2>
					<p className="text-gray-600 text-lg">
						Powered by Starlink, we can bring you a satellite
						livestock tracking system for the cattle operator from
						space to your place in some of the most remote country
						of Australia.
					</p>
				</div>
				<div className="my-8">
					<h2 className="text-3xl font-bold text-gray-800 mb-4">
						Grand Cattle Fund
					</h2>
					<p className="text-gray-600 text-lg">
						As a wholesale fundraising product, Grand cattle fund
						focus on the investment opportunities in the beef cattle
						industry in Australia, which comes with secured assets,
						guaranteed return, and regulatory compliance.
					</p>
				</div>
			</div>
		</div>
	);
}

export default AboutPage;
