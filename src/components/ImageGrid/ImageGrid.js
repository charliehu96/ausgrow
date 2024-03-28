import React from "react";
import "./imagegrid.css";
// Importing images directly in the component
import image1 from "../../assets/images/image-grid-1.jpg";
import image2 from "../../assets/images/image-grid-2.jpg";
import image3 from "../../assets/images/image-grid-3.jpg";
import image4 from "../../assets/images/image-grid-4.jpg";
import image5 from "../../assets/images/image-grid-5.jpg";
import image6 from "../../assets/images/image-grid-6.jpg";

const ImageGrid = () => {
	const items = [
		{
			image: image1,
			title: "Cattle Farm",
			link: "#link1",
			linkText: "Join the network",
		},
		{
			image: image2,
			title: "Auction Yard",
			link: "#link2",
			linkText: "Agency sign up",
		},
		{
			image: image3,
			title: "Feedlot",
			link: "#link3",
			linkText: "Operator sign up",
		},
		{
			image: image4,
			title: "Abattoir",
			link: "#link4",
			linkText: "Processor sign up",
		},
		{
			image: image5,
			title: "Exporter",
			link: "#link5",
			linkText: "Merchant sign up",
		},
		{
			image: image6,
			title: "Distributor",
			link: "#link6",
			linkText: "Become a partner",
		},
	];

	return (
		<div className="grid md:grid-cols-3 grid-cols-1 gap-x-8 gap-y-4">
			{items.map((item, index) => (
				<div key={index} className="space-y-2 p-4">
					<img src={item.image} alt={item.title} className="w-full" />
					<h3 className="image-grid-title tracking-wider text-center md:text-left">
						{item.title}
					</h3>
					<a
						className="link-text custom-hover block text-center md:text-left"
						href={item.link}
					>
						{item.linkText}
					</a>
				</div>
			))}
		</div>
	);
};

export default ImageGrid;