import React from "react";

const BackgroundVideo = () => {
	return (
		<div className="relative">
			<video
				autoPlay
				loop
				muted
				playsInline
				className="absolute top-0 left-0 w-full h-full object-cover"
			>
				<source
					src="../../assets/videos/cattle-background.mp4"
					type="video/mp4"
				/>
			</video>
			<div className="absolute inset-0 flex items-center justify-center">
				<div className="text-white text-4xl font-bold">
					Your Content Goes Here
				</div>
			</div>
		</div>
	);
};

export default BackgroundVideo;
