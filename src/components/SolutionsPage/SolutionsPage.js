import React from "react";
import Header from "../Header/Header";
import solutionsHeroImage from "../../assets/images/solutions-hero.jpg";

function SolutionsPage() {
	return (
		<div className="min-h-screen flex flex-col">
			<Header />
			{/* Hero Section */}
			<div
				className="text-center py-20 grid place-items-center h-screen"
				style={{
					backgroundImage: `url(${solutionsHeroImage})`,
					backgroundSize: "cover",
					backgroundPosition: "center",
					height: "45vh",
				}}
			>
				<h1 className="text-5xl font-bold">Our Solutions</h1>
				<p className="text-xl mt-4">
					From Field to Future: Smart Solutions for Modern Farming
				</p>
			</div>

			{/* Content Section */}
			<div className="flex-1 container mx-auto px-24 py-16">
				<div className="my-8">
					<h2 className="text-3xl font-bold text-gray-800 mb-4">
						Beef cattle supply chain
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
						Cattle farming
					</h2>
					<p className="text-gray-600 text-lg">
						The cattle industry is a leading source of agriculture
						income for Australia. The largest herds of beef cattle
						are raised in Queensland and New South Wales, but the
						industry is important in other states and territories as
						well.
					</p>
				</div>
				<div className="my-8">
					<h2 className="text-3xl font-bold text-gray-800 mb-4">
						Cattle saleyard
					</h2>
					<p className="text-gray-600 text-lg">
						Cattle saleyard is a physical auction market where
						buyers and sellers trade livestock, in which the stock
						in store sale offered are for breeding or future
						finishing, and prime sale stock are finished enough for
						slaughter.
					</p>
				</div>
				<div className="my-8">
					<h2 className="text-3xl font-bold text-gray-800 mb-4">
						Cattle feedlot
					</h2>
					<p className="text-gray-600 text-lg">
						Cattle feedlots are gated, barren yards where large
						numbers of cattle are fed a grain-based diet such as
						barley, wheat, and sorghum to make the cattle reach a
						specific weight before they are slaughtered for beef
						production.
					</p>
				</div>
				<div className="my-8">
					<h2 className="text-3xl font-bold text-gray-800 mb-4">
						Beef Abattoir
					</h2>
					<p className="text-gray-600 text-lg">
						Beef processing abattoir is a factory where cattle
						stocks are slaughtered, boning, and packaging for food
						consumption, which is also known as a processing plant,
						slaughterhouse. or meatworks.
					</p>
				</div>
				<div className="my-8">
					<h2 className="text-3xl font-bold text-gray-800 mb-4">
						Beef Exporter
					</h2>
					<p className="text-gray-600 text-lg">
						Australia was the top four largest beef exporter after
						Brazil, India, and the US by producing approximately
						2.5% of global beef production with around 1.5% of the
						global cattle herd.
					</p>
				</div>
				<div className="my-8">
					<h2 className="text-3xl font-bold text-gray-800 mb-4">
						Beef Distributor
					</h2>
					<p className="text-gray-600 text-lg">
						Meat Standards Australia (MSA) underpins the quality of
						more than 135 beef and lamb brands, those are stocked by
						more than 3,000 independent butchers, supermarkets, and
						food service outlets.
					</p>
				</div>
			</div>
		</div>
	);
}

export default SolutionsPage;
