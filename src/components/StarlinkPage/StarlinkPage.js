import React from "react";
import Header from "../Header/Header";
import starlinkHeroImage from "../../assets/images/starlink-hero.jpg";

function StarlinkPage() {
	return (
		<div className="min-h-screen flex flex-col">
			<Header />
			{/* Hero Section */}
			<div
				className="text-center text-white py-20 grid place-items-center h-screen"
				style={{
					backgroundImage: `url(${starlinkHeroImage})`,
					backgroundSize: "cover",
					backgroundPosition: "center",
					height: "60vh",
				}}
			>
				<h1 className="text-5xl font-bold">Starlink Trackers</h1>
				<p className="text-xl">Connecting cattle to the clouds</p>
			</div>

			{/* Content Section */}
			<div className="flex-1 container mx-auto px-24 py-16">
				<div className="my-8">
					<h2 className="text-3xl font-bold text-gray-800 mb-4">
						Starlink livestock tracking system
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
						Starlink system
					</h2>
					<p className="text-gray-600 text-lg">
						Starlink are already reaping the rewards of our
						end-to-end, game changing technology. It is not just
						stimulating innovation, it is creating jobs and driving
						economic growth in rural communities including cattle
						farming.
					</p>
				</div>
				<div className="my-8">
					<h2 className="text-3xl font-bold text-gray-800 mb-4">
						Satellite tracker
					</h2>
					<p className="text-gray-600 text-lg">
						Satellite smart ear-tag features geo-location for
						greater traceability and provenance of locating and
						monitoring the activities of the livestock for many
						livestock operators.
					</p>
				</div>
				<div className="my-8">
					<h2 className="text-3xl font-bold text-gray-800 mb-4">
						National cattle herd
					</h2>
					<p className="text-gray-600 text-lg">
						The Australia National Cattle Herd is expected to reach
						28.6 million head by 30 June 2024, according to Meat &
						Livestock Australia (MLA) latest Cattle Industry
						Projections.
					</p>
				</div>
				<div className="my-8">
					<h2 className="text-3xl font-bold text-gray-800 mb-4">
						Manage your cattle
					</h2>
					<p className="text-gray-600 text-lg">
						The only comprehensive end-to-end App you need to keep
						tabs on every part of your cattle business form basic
						record keeping to task management, weight projections to
						cost of production.
					</p>
				</div>
				<div className="my-8">
					<h2 className="text-3xl font-bold text-gray-800 mb-4">
						Reminder for map with statistics
					</h2>
				</div>
			</div>
		</div>
	);
}

export default StarlinkPage;
