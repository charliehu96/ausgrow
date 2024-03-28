import React, { useEffect } from "react";
import "ol/ol.css";
import Map from "ol/Map";
import View from "ol/View";
import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";

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
				zoom: 4.5, // Initial zoom level
			}),
		});

		return () => {
			// Cleanup function to remove the map instance
			map.setTarget(null);
		};
	}, []); // Empty dependency array ensures this effect runs only once

	return <div id="map" style={{ width: "100%", height: "600px" }}></div>;
}

function MapComponent() {
	return (
		<div className="flex flex-col p-4 mt-8">
			<div className="flex justify-between items-center mb-4">
				<h2 className="text-4xl font-bold text-tracking-wider">
					National Cattle Herd
				</h2>
				<a href="https://example.com" className="custom-hover text-xl">
					View history report
				</a>
			</div>
			<div className="map">
				<AustraliaMap />
			</div>
		</div>
	);
}

export default MapComponent;
