import React from "react";
import { useInView } from "react-intersection-observer";

const ImageItem = ({ image, title, link, linkText }) => {
	const { ref, inView } = useInView({
		threshold: 0.8,
		triggerOnce: true,
	});

	// React.useEffect(() => {
	// 	if (entry) {
	// 		console.log("Intersection Observer Entry:", entry);
	// 		console.log("Intersection Ratio:", entry.intersectionRatio); // How much of the target is visible
	// 		console.log("Bounding Client Rect:", entry.boundingClientRect); // Position in the viewport
	// 		console.log("Is Intersecting:", entry.isIntersecting); // If the target is intersecting
	// 	}
	// }, [entry]);

	return (
		<div
			ref={ref}
			className={`space-y-2 p-4 ${
				inView ? "slide-in-bottom" : "opacity-0"
			}`}
		>
			<img src={image} alt={title} className="w-full h-80 object-cover" />
			<h3 className="image-grid-title tracking-wider text-center md:text-left">
				{title}
			</h3>
			<a
				className="link-text custom-hover block text-center md:text-left"
				href={link}
			>
				{linkText}
			</a>
		</div>
	);
};

export default ImageItem;
