import React, { useEffect } from "react";
import "ol/ol.css";
import Map from "ol/Map";
import View from "ol/View";
import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";
import { defaults as defaultInteractions } from "ol/interaction";

function AustraliaMap() {
	useEffect(() => {
		// Create a new map instance
		const map = new Map({
			target: "map", // The HTML element with id="map"
			layers: [
				new TileLayer({
					source: new OSM(), // OpenStreetMap layer as the base map
				}),
			],
			view: new View({
				center: [14800000, -3200000], // Center coordinates of Australia
				zoom: 4, // Initial zoom level
				interactions: defaultInteractions({
					doubleClickZoom: false,
					dragAndDrop: false,
					dragPan: false,
					keyboardPan: false,
					keyboardZoom: false,
					mouseWheelZoom: false,
					pointer: false,
					select: false,
				}),
			}),
		});

		return () => {
			// Cleanup function to remove the map instance
			map.setTarget(null);
		};
	}, []); // Empty dependency array ensures this effect runs only once

	return <div id="map" style={{ width: "100%", height: "400px" }}></div>;
}

function MapComponent() {
	return (
		<div className="flex flex-col p-4 mt-8">
			<div className="flex justify-between items-center mb-4">
				<h2 className="text-2xl md:text-4xl font-bold text-tracking-wider mb-2">
					National Cattle Herd
				</h2>
				<a
					href="https://example.com"
					className="custom-hover md:text-xl text-right md:text-left"
				>
					View history report
				</a>
			</div>
			<div className="map">
				<AustraliaMap />
			</div>
			<div className="grid md:grid-cols-3 grid-cols-2 gap-8 gap-x-32 my-8 jusify-center">
				<a
					href="www.example.com"
					className="text-left custom-hover text-sm md:text-lg"
				>
					National Cattle Number
				</a>
				<a
					href="www.example.com"
					className="text-left custom-hover  text-sm md:text-lg"
				>
					New South Wales
				</a>
				<a
					href="www.example.com"
					className="text-left custom-hover  text-sm md:text-lg"
				>
					Queensland
				</a>
				<a
					href="www.example.com"
					className="text-left custom-hover  text-sm md:text-lg"
				>
					Victoria
				</a>
				<a
					href="www.example.com"
					className="text-left custom-hover  text-sm md:text-lg"
				>
					Western Australia
				</a>
				<a
					href="www.example.com"
					className="text-left custom-hover  text-sm md:text-lg"
				>
					Nothern Territory
				</a>
				<a
					href="www.example.com"
					className="text-left custom-hover  text-sm md:text-lg"
				>
					Tasmania
				</a>
				<a
					href="www.example.com"
					className="text-left custom-hover  text-sm md:text-lg"
				>
					South Australia
				</a>
				<a
					href="www.example.com"
					className="text-left custom-hover  text-sm md:text-lg"
				>
					New Zealand
				</a>
			</div>
		</div>
	);
}

export default MapComponent;
