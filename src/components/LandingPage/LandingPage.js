// src/LandingPage.js
import React from "react";

function LandingPage() {
	return (
		<div>
			<h1>Welcome to My Landing Page</h1>
			<p>This is a basic landing page created with React.</p>
			<div style={{ height: "1200px" }}></div>
			<div>
				<p className="tracking-tight">
					This text has tight letter-spacing.
				</p>
				<p className="tracking-normal">
					This text has normal letter-spacing.
				</p>
				<p className="tracking-wide">
					This text has wide letter-spacing.
				</p>
				<p className="tracking-wider">
					This text has wider letter-spacing.
				</p>
				<p className="tracking-widest">
					This text has the widest letter-spacing.
				</p>
			</div>
		</div>
	);
}

export default LandingPage;
